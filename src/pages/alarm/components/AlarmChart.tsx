import { Column } from "@ant-design/charts";

export function AlarmChart({
  data,
}: {
  data: Array<{ datetime: string; count: number }>;
}) {
  const config = {
    data,
    xField: "datetime",
    yField: "count",
    autoFit: true,
    color: "#320F2F",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      count: {
        alias: "告警次数",
      },
    },
  };

  return (
    <div className=" p-8 bg-white rounded-lg border-2 border-gray-100">
      <div className=" mb-4 text-xl  font-semibold ">告警个数总览(天)</div>
      <Column {...config} />
    </div>
  );
}
