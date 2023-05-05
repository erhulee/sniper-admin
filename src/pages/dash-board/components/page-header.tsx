import { Layout, Dropdown, Select, message, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import styles from "./index.module.scss";
import { useSnapshot } from "valtio";
import { useQuery } from "react-query";
import { clearUserStore } from "@/store/userInfo";
import { useEffect, useRef } from "react";
import { globalFilterStore } from "@/store";
import { addProject, deleteProject, queryProject } from "@/api/project";
import { Project } from "@/pages/types";
import ProjectFormModal from "./project-form-modal";
import useModal from "@/hooks/useModal";
import LogoIcon from "@/assets/icons/LogoIcon";
import { CopyOutlined } from "@ant-design/icons";
import ProjectListDrawer from "./project-list-drawer";
import useClipBoard from "@/hooks/useClipBoard";
import { getWebVitals } from "@/api/performance";
import {
  getCrashErrorInfo,
  getHTTPErrorInfo,
  getJSErrorInfo,
  getResourceErrorInfo,
} from "@/api/error";
import { queryCurrentAlarms } from "@/api/alaram";
import PDFDrawer from "./pdf-drawer";
import { useState } from "react";
import dayjs from "dayjs";
const { Header } = Layout;
function getWebVitalTableData(data: Array<any>) {
  const keysOrder = ["TTFB", "CLS", "FID", "LCP", "FCP"];
  const colKeys = ["good", "needs-improvement", "bad"];
  const tableData = new Array(colKeys.length)
    .fill(0)
    .map(() => new Array(keysOrder.length).fill(0));

  data.forEach(({ category, path_performance }) => {
    const colIndex = keysOrder.indexOf(category);
    path_performance.forEach((item: any) => {
      const { partition } = item;
      colKeys.forEach((key, index) => {
        const count = partition[key];
        tableData[index][colIndex] += count;
      });
    });
  });
  return {
    rowHead: keysOrder,
    colHead: ["良好", "一般", "差劲"],
    data: tableData,
  };
}
function getJSErrorReport(
  data: Array<{
    message: string;
    loggers: Array<{ count: number }>;
  }>
) {
  return data.map((item) => {
    return {
      message: item.message,
      count: item.loggers.reduce((pre, cur) => pre + cur.count, 0),
    };
  });
}
function getHTTPErrorReport(
  data: Array<{
    url: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.url,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
function getCrashReport(
  data: Array<{
    path: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.path,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
function getResourceReport(
  data: Array<{
    src: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.src,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
function getAlarmReport(
  data: Array<{
    buzzerid: string;
    buzzerName: string;
  }>
) {
  return data
    .reduce(
      (
        pre: Array<{ buzzerid: string; buzzerName: string; count: number }>,
        cur
      ) => {
        const data = pre.find((item) => item.buzzerid == cur.buzzerid);
        if (data == null) {
          pre.push({
            buzzerid: cur.buzzerid,
            buzzerName: cur.buzzerName,
            count: 0,
          });
          return pre;
        } else {
          data.count++;
          return pre;
        }
      },
      []
    )
    .map((item) => ({
      message: item.buzzerName,
      count: item.count,
    }));
}
export default function PageHeader() {
  const filter = useSnapshot(globalFilterStore);
  const [visible, open, close] = useModal();
  const [exportLoading, setExportLoading] = useState(false);
  const [drawerVisible, openDrawer, closeDrawer] = useModal();
  const [pdfVisible, openPDF, closePDF] = useModal();
  const headerRef = useRef(null);
  const handleLogOut = () => {
    clearUserStore();
  };
  const [pdfData, setPDFData] = useState<{
    webvital: ReturnType<typeof getWebVitalTableData> | null;
    jsError: ReturnType<typeof getJSErrorReport> | null;
    httpError: ReturnType<typeof getHTTPErrorReport> | null;
    crashError: ReturnType<typeof getCrashReport> | null;
    resourceError: ReturnType<typeof getResourceReport> | null;
    alarmReport: ReturnType<typeof getAlarmReport> | null;
  }>({
    webvital: null,
    jsError: null,
    httpError: null,
    crashError: null,
    resourceError: null,
    alarmReport: null,
  });

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

  useClipBoard("#btn", () => {
    message.success("appid 已经复制到粘贴板");
  });

  useEffect(() => {
    refetch();
  }, []);
  const exportReport = async () => {
    // 混个需求罢了 -> 把所有的 api 都掉一次，主打一个能跑就行
    const startDate = dayjs(Date.now()).startOf("day").valueOf();
    const endDate = dayjs(Date.now()).endOf("day").valueOf();
    setExportLoading(true);
    const report = await Promise.all([
      getWebVitals(startDate, endDate),
      getJSErrorInfo(startDate, endDate),
      getHTTPErrorInfo(startDate, endDate),
      getCrashErrorInfo(startDate, endDate),
      getResourceErrorInfo(startDate, endDate),
      queryCurrentAlarms(),
    ]);

    const webVitalData = getWebVitalTableData(report[0].data);
    const jsErrorData = getJSErrorReport(report[1].data);
    const httpErrorData = getHTTPErrorReport(report[2].data);
    const crashErrorData = getCrashReport(report[3].data);
    const resourceErrorData = getResourceReport(report[4].data);
    const alarmsErrorData = getAlarmReport(report[5].data);

    setPDFData({
      webvital: webVitalData,
      jsError: jsErrorData,
      httpError: httpErrorData,
      crashError: crashErrorData,
      resourceError: resourceErrorData,
      alarmReport: alarmsErrorData,
    });
    setExportLoading(false);
    openPDF();
  };

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
      <PDFDrawer
        data={pdfData}
        visible={pdfVisible}
        close={closePDF}
      ></PDFDrawer>
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
            id="btn"
            icon={<CopyOutlined />}
            className="mx-4"
            data-clipboard-text={globalFilterStore.selectedProject?._id ?? ""}
          ></Button>
          <Button
            className="mr-4"
            onClick={exportReport}
            loading={exportLoading}
          >
            导出报告
          </Button>

          <Dropdown menu={{ items: item }} arrow={true}>
            <MenuFoldOutlined className=" text-white text-2xl" />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
