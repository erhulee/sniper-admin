import { useQuery } from "react-query";
import { queryAlarms, queryBuzzer, queryCurrentAlarms } from "@/api/alaram";
import { globalFilterStore } from "@/store";
import { useSnapshot } from "valtio/react";
import BuzzerTable from "./components/BuzzerTable";
import QueryOuter from "@/wrapper/QueryOuter";
import { AlarmChart } from "./components/AlarmChart";
import AlarmList from "./components/AlarmList";
import AlarmDrawer from "./components/alarm-drawer";
import useModal from "@/hooks/useModal";

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
    <div className=" flex justify-between  min-h-full h-full overflow-visible ">
      <div className=" mr-6 flex-1 h-full flex flex-col w-28">
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
      <div className=" bg-white w-28 " style={{ minWidth: "350px" }}>
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
