import { PlusOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Select, Avatar, Button } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import ProjectFormModal from "./project-form-modal";
import useModal from "./useModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logOutImg from "../../assets/logout.png";
import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import { addProject, queryProject } from "../../api/project";
import CopyContent from "../../components/copy-content";
import { useMutation, useQuery } from "react-query";
import { globalFilterStore } from "../../store/globalFilter";
import { Project } from "../types";
import GlobalFilter from "@/components/global-filter";
import { clearUserStore } from "@/store/userInfo";
import { menuItems } from "./contants";
import { useEffect } from "react";
const { Header, Content, Sider } = Layout;

function PageHeader() {
  useSnapshot(globalFilterStore);
  const [visible, open, close] = useModal();
  const navigate = useNavigate();
  const handleLogOut = () => {
    clearUserStore();
    navigate("/");
  };

  const { data, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: "project",
    queryFn: queryProject,
    enabled: false,
    initialData: {
      data: [],
    },
  });

  const mutation = useMutation((newProject: any) => {
    return addProject(newProject);
  });

  const handleSelectChange = (projectId: string) => {
    const projectList = (data as any)?.r.data as Array<Project>;
    const selectProject = projectList.find(
      (project) => project._id === projectId
    );
    selectProject && (globalFilterStore.selectedProject = selectProject);
  };

  useEffect(() => {
    refetch();
  }, []);

  let options: Array<{
    label: string;
    value: string | number;
  }> = (data?.data || []).map((i) => ({ label: i.projectName, value: i._id }));

  if (globalFilterStore.selectedProject == null && data?.data[0])
    globalFilterStore.selectedProject = data.data[0];

  return (
    <>
      <ProjectFormModal
        visible={visible}
        open={open}
        close={close}
        updateProjectList={(newProject: any) => {
          mutation.mutate(newProject);
          refetch();
        }}
      ></ProjectFormModal>
      <Header className={styles.header}>
        <div className={styles.left}>
          <img src={logo} className={styles.logo}></img>
          <span className={styles.name}>哨兵监控看板</span>
        </div>
        <div className={styles.right}>
          <CopyContent
            content={globalFilterStore.selectedProject?._id}
          ></CopyContent>
          <Select
            options={options}
            style={{
              width: "100px",
            }}
            loading={isFetching}
            value={globalFilterStore.selectedProject?.projectName}
            onChange={handleSelectChange}
          ></Select>
          <Button
            onClick={() => open()}
            type="primary"
            icon={<PlusOutlined />}
            className={styles.btn}
          ></Button>

          <Avatar
            onClick={() => handleLogOut()}
            className="ml-2 bg-red-600 hover:bg-red-500 cursor-pointer"
            style={{ padding: "5px" }}
            src={logOutImg}
          ></Avatar>
        </div>
      </Header>
    </>
  );
}

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const userInfo = useSnapshot(userStore);
  // if (userInfo.userid) {
  //   return <Navigate to="/"></Navigate>;
  // }

  return (
    <div className={styles.page}>
      <Layout style={{ height: "100vh" }}>
        <PageHeader></PageHeader>
        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            collapsible
            width={200}
            style={{ background: colorBgContainer }}
          >
            <Menu
              onClick={({ key, keyPath }) => {
                navigate(keyPath.reverse().join("/"));
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={menuItems}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <GlobalFilter></GlobalFilter>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                overflow: "scroll",
              }}
            >
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashBoard;
