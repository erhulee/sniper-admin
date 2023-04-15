import { Layout, Dropdown, Select, message, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import styles from "./index.module.scss";
import { useSnapshot } from "valtio";
import { useMutation, useQuery } from "react-query";
import { clearUserStore } from "@/store/userInfo";
import { useEffect } from "react";
import { globalFilterStore } from "@/store";
import { addProject, deleteProject, queryProject } from "@/api/project";
import { Project } from "@/pages/types";
import ProjectFormModal from "./project-form-modal";
import useModal from "@/hooks/useModal";
import LogoIcon from "@/assets/icons/LogoIcon";
import { useRef } from "react";
import { CopyOutlined } from "@ant-design/icons";
import ProjectListDrawer from "./project-list-drawer";
const { Header } = Layout;

export default function PageHeader() {
  const filter = useSnapshot(globalFilterStore);
  const [visible, open, close] = useModal();
  const [drawerVisible, openDrawer, closeDrawer] = useModal();
  const headerRef = useRef(null);
  const handleLogOut = () => {
    clearUserStore();
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
    } catch {
    } finally {
      closeDrawer();
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  const item: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={open}>新增站点</div>,
    },
    {
      key: "2",
      label: <div onClick={openDrawer}>管理站点</div>,
    },
    {
      key: "2",
      label: <div onClick={handleLogOut}>退出账号</div>,
    },
  ];
  const options = (data?.data || []).map((i) => ({
    key: i._id,
    value: i._id,
    label: i.projectName,
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
          await addProject(newProject);
          refetch();
        }}
      ></ProjectFormModal>
      <ProjectListDrawer
        visible={drawerVisible}
        close={closeDrawer}
        list={(data?.data || []).map((i) => ({
          id: i._id,
          content: i.projectName,
        }))}
        onDelete={(id: string) => {
          handleDeleteProject(id);
        }}
        onAdd={() => {
          closeDrawer();
          open();
        }}
      />

      <Header className={styles.header} ref={headerRef}>
        <div className={styles.left}>
          <LogoIcon></LogoIcon>
        </div>
        <div className={styles.right}>
          <Select
            className=" w-40"
            options={options}
            onChange={(e) => {
              handleSelectChange(e);
            }}
            value={filter.selectedProject?._id}
          ></Select>
          <Button
            icon={<CopyOutlined />}
            onClick={() => {
              navigator.clipboard.writeText(
                globalFilterStore.selectedProject?._id ?? ""
              );
              message.success("appid 已经复制到粘贴板");
            }}
            className="mx-4"
          ></Button>
          <Dropdown menu={{ items: item }} arrow={true}>
            <MenuFoldOutlined className=" text-white text-2xl" />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
