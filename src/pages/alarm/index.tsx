import { useQuery } from "react-query";
import { queryAlarms, queryBuzzer, queryCurrentAlarms } from "@/api/alaram";
import { globalFilterStore } from "@/store";
import { useSnapshot } from "valtio/react";
import BuzzerTable from "./components/BuzzerTable";
import QueryOuter from "@/wrapper/QueryOuter";
import { AlarmChart } from "./components/AlarmChart";
import AlarmList from "./components/AlarmList";
import AlarmDrawer from "./components/alarm-drawer";
import useModal from "../dash-board/useModal";

function AlarmPage() {
  const snap = useSnapshot(globalFilterStore);
  const barChartQuery = useQuery({
    queryKey: [
      "alarmsList",
      {
        startDate: snap.startDate.valueOf(),
        endDate: snap.endDate.valueOf(),
      },
    ],
    queryFn: ({ queryKey: [_, params] }) => {
      return queryAlarms(params as any);
    },
    initialData: {
      success: true,
      data: [],
    },
  });
  const alarmListQuery = useQuery({
    queryKey: ["currentAlarms"],
    queryFn: queryCurrentAlarms,
    initialData: {
      success: true,
      data: [],
    },
  });
  const BuzzerListQuery = useQuery({
    queryKey: ["buzzer_list"],
    queryFn: queryBuzzer,
    initialData: { success: true, data: [] },
  });

  const [visible, open, close] = useModal();
  return (
    <div className=" flex justify-between h-full ">
      <div className=" mr-8  flex-1 h-full ">
        <QueryOuter
          isError={BuzzerListQuery.isError || barChartQuery.isError}
          isSuccess={BuzzerListQuery.isSuccess && barChartQuery.isSuccess}
          isFetching={BuzzerListQuery.isFetching || barChartQuery.isFetching}
        >
          <AlarmChart data={barChartQuery.data?.data ?? []}></AlarmChart>

          <BuzzerTable
            data={BuzzerListQuery.data?.data ?? []}
            refetch={BuzzerListQuery.refetch}
          ></BuzzerTable>
        </QueryOuter>
      </div>
      <div
        className="p-5 border border-solid border-primary-100 bg-slate-50 w-28 "
        style={{ minWidth: "300px" }}
      >
        <QueryOuter
          isError={alarmListQuery.isError}
          isSuccess={alarmListQuery.isSuccess}
          isFetching={alarmListQuery.isFetching}
        >
          <AlarmList
            data={alarmListQuery.data?.data || []}
            openModal={open}
          ></AlarmList>
        </QueryOuter>
      </div>

      <AlarmDrawer
        visible={visible}
        close={() => {
          close();
          BuzzerListQuery.refetch();
        }}
      ></AlarmDrawer>
    </div>
  );
}

export default AlarmPage;
