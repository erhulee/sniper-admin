import styles from "./index.module.scss";
import ErrorListTable from "./error-list-table";
import { useQuery } from "react-query";
import {
  getCrashErrorInfo,
  getErrorInfo,
  getHTTPErrorInfo,
  getJSErrorInfo,
  getResourceErrorInfo,
} from "../../api/error";
import dayjs from "dayjs";
import { subscribe } from "valtio";
import { globalFilterStore } from "@/store";
import { Area } from "@ant-design/charts";
import QueryOuter from "@/wrapper/QueryOuter";
import { Tabs, TabsProps } from "antd";
import { useState } from "react";
const legendMap: Record<string, string> = {
  js: "运行错误",
  resource: "静态资源",
  http: "网络错误",
  collapse: "页面崩溃",
};
function ErrorChart(props: { data: any[] }) {
  const config = {
    data: props.data,
    xField: "datestamp",
    yField: "count",
    seriesField: "category",
    slider: {
      start: 0,
      end: 1,
    },
  };
  return (
    <div className=" h-96">
      <Area
        {...config}
        height={400}
        legend={{
          itemName: {
            formatter: (text: any) => {
              return legendMap[text];
            },
          },
        }}
      ></Area>
    </div>
  );
}

function Errors() {
  subscribe(globalFilterStore, () => {
    trendQuery.refetch();
    JStableQuery.refetch();
  });
  const startDate = globalFilterStore.startDate.valueOf();
  const endDate = globalFilterStore.endDate.valueOf();
  const [activeTab, setActiveTab] = useState("js");
  const trendQuery = useQuery({
    queryKey: ["error", startDate, endDate],
    queryFn: () => getErrorInfo(startDate, endDate),
    initialData: {
      success: true,
      data: [],
    },
  });

  const JStableQuery = useQuery({
    queryKey: ["jsErrorTable", startDate, endDate],
    queryFn: () => getJSErrorInfo(startDate, endDate),
    initialData: {
      success: true,
      data: [],
    },
    select: ({ data }) => ({
      data: data.map((item) => {
        const mostLastTime = (
          item.loggers.find((log: any) => log.count !== 0) || {}
        ).date;
        return {
          id: item.id,
          type: "运行错误",
          name: item.message || "unknown",
          detail: item.stack || "",
          last_timestamp: mostLastTime,
          trend: item.loggers.map((log: any) => ({
            count: log.count,
            timestamp: log.date,
          })),
        };
      }),
    }),
  });
  const HTTPTableQuery = useQuery({
    queryKey: ["httpErrorTable", startDate, endDate],
    queryFn: () => getHTTPErrorInfo(startDate, endDate),
    initialData: {
      data: [],
    },
    select: ({ data }) => {
      return {
        data: data.map((item) => ({
          ...item,
          type: "网络错误",
          name: item.url,
        })),
      };
    },
  });
  const ResourceTableQuery = useQuery({
    queryKey: ["resourceErrorTable", startDate, endDate],
    queryFn: () => getResourceErrorInfo(startDate, endDate),
    initialData: {
      data: [],
    },
    select: ({ data }) => {
      return {
        data: data.map((item) => ({
          ...item,
          type: "静态资源错误",
          name: item.src,
        })),
      };
    },
  });
  const items: TabsProps["items"] = Object.entries(legendMap).map(
    ([key, label]) => {
      return {
        key,
        label,
      };
    }
  );

  const CrashTableQuery = useQuery({
    queryKey: ["crashErrorTable", startDate, endDate],
    queryFn: () => getCrashErrorInfo(startDate, endDate),
    initialData: {
      data: [],
    },
    select: ({ data }) => {
      return {
        data: data.map((item) => ({
          ...item,
          type: "页面崩溃",
          name: item.path,
        })),
      };
    },
  });

  const queryMap: any = {
    js: JStableQuery,
    http: HTTPTableQuery,
    resource: ResourceTableQuery,
    collapse: CrashTableQuery,
  };

  const activeQuery = queryMap[activeTab];
  return (
    <div className={`${styles.page} bg-white p-8 min-h-full`}>
      {/* <QueryOuter queryClient={[activeQuery, trendQuery]}> */}
      <ErrorChart
        data={(trendQuery.data?.data || []).map((i) => ({
          ...i,
          datestamp: dayjs(i.datestamp).format("MM-DD HH时"),
        }))}
      ></ErrorChart>
      <Tabs
        activeKey={activeTab}
        items={items}
        onChange={(e) => {
          setActiveTab(e);
        }}
      ></Tabs>
      <ErrorListTable data={activeQuery.data?.data || []}></ErrorListTable>
      {/* </QueryOuter> */}
    </div>
  );
}

export default Errors;
