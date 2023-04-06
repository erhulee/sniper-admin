import {
  PlusOutlined,
  DownOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Button, Dropdown, Popconfirm } from "antd";
import type { MenuProps } from "antd";
import styles from "./index.module.scss";
import logo from "../../../assets/logo.png";
import logOutImg from "../../../assets/logout.png";

import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { useMutation, useQuery } from "react-query";
import { clearUserStore } from "@/store/userInfo";
import { useEffect } from "react";
import { globalFilterStore } from "@/store";
import { addProject, deleteProject, queryProject } from "@/api/project";
import { Project } from "@/pages/types";
import ProjectFormModal from "./project-form-modal";
import CopyContent from "@/components/copy-content";
import useModal from "@/hooks/useModal";
const { Header } = Layout;

export default function PageHeader() {
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
        updateProjectList={async (newProject: any) => {
          //   await mutation.mutate(newProject);
          await addProject(newProject);
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
            {isFetching ? (
              <span>正在请求中...</span>
            ) : (
              <div
                className=" flex justify-between items-center  font-black font-normal  rounded-md mr-2 bg-white h-8 px-4 border border-solid border-gray-600 "
                style={{ lineHeight: "32px" }}
              >
                {globalFilterStore.selectedProject?.projectName}
                <DownOutlined className="ml-2" />
              </div>
            )}
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
