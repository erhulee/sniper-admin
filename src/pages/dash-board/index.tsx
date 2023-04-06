import {
  PlusOutlined,
  DownOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Select,
  Avatar,
  Button,
  Dropdown,
  Popconfirm,
} from "antd";
import React from "react";
import type { MenuProps } from "antd";
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
import { addProject, deleteProject, queryProject } from "../../api/project";
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
    const projectList = (data as any)?.data as Array<Project>;
    const selectProject = projectList.find(
      (project) => project._id === projectId
    );
    selectProject && (globalFilterStore.selectedProject = selectProject);
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      await deleteProject(projectId);
      if (globalFilterStore.selectedProject?._id == projectId)
        globalFilterStore.selectedProject = null;
      refetch();
    } catch {}
  };

  useEffect(() => {
    refetch();
  }, []);

  const items: MenuProps["items"] = (data?.data || []).map((i) => ({
    key: i._id,
    label: (
      <div className="flex justify-between ">
        <div onClick={() => handleSelectChange(i._id)} className="flex-1 ">
          {i.projectName}
        </div>
        <Popconfirm
          onConfirm={() => {
            handleDeleteProject(i._id);
          }}
          title="删除项目"
          description="删除后不可找回?"
          okText="确认"
          cancelText="取消"
        >
          <CloseCircleOutlined className="hover:bg-slate-300  rounded-full p-1" />
        </Popconfirm>
      </div>
    ),
    value: i._id,
  }));
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

          <Dropdown menu={{ items }}>
            <div
              className=" flex justify-between items-center  font-black font-normal  rounded-md mr-2 bg-white h-8 px-4 border border-solid border-gray-600 "
              style={{ lineHeight: "32px" }}
            >
              {globalFilterStore.selectedProject?.projectName}
              <DownOutlined className="ml-2" />
            </div>
          </Dropdown>

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
