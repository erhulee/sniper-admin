import styles from "./index.module.scss";
import ErrorListTable from "./error-list-table";
import { useQuery, useQueryClient } from "react-query";
import { getErrorInfo, getJSErrorInfo } from "../../api/error";
import dayjs from "dayjs";
import { useSnapshot } from "valtio";
import { globalFilterStore } from "@/store";
import { Area } from "@ant-design/charts";

function ErrorChart(props: { data: any[] }) {
  const config = {
    data: props.data,
    xField: "date",
    yField: "count",
    seriesField: "type",
    slider: {
      start: 0,
      end: 1,
    },
  };
  return <Area {...config}></Area>;
}

function createLineData(
  data: Array<{
    time: number;
    logger: any[];
  }>
) {
  const types = ["JS", "Resource", "HTTP", "Collapse"];
  return data.reduce<Array<{ date: string; count: number; type: string }>>(
    (pre, curItem) => {
      types.forEach((type) => {
        pre.push({
          date: dayjs(curItem.time).format("MM月DD日HH时"),
          count: curItem.logger.filter((i) => i.type == type).length || 0,
          type,
        });
      });
      return pre;
    },
    []
  );
}

function Errors() {
  const globalFilterSnap = useSnapshot(globalFilterStore);
  const startDate = globalFilterStore.startDate.valueOf();
  const endDate = globalFilterStore.endDate.valueOf();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["error", startDate, endDate],
    queryFn: () => getErrorInfo(startDate, endDate),
  });

  const tableQuery = useQuery({
    queryKey: ["errorTable", startDate, endDate],
    queryFn: () => getJSErrorInfo(startDate, endDate),
  });
  const { data, isLoading, isError, refetch, isSuccess } = query;
  let lineChartData: any[] = [];
  let tableData: any = [];

  if (isSuccess) {
    lineChartData = createLineData(data?.data);
  }

  if (tableQuery.isSuccess) {
    tableData = tableQuery.data.data;
  }

  return (
    <div className={`${styles.page} bg-white p-8`}>
      <ErrorChart data={lineChartData}></ErrorChart>
      <ErrorListTable data={tableData}></ErrorListTable>
    </div>
  );
}

export default Errors;
