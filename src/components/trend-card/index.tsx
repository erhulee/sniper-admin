import { Area } from "@ant-design/charts";

import { BehaviorData } from "@/api/behavior";

function TrendChart({ data }: { data: any[] }) {
  const config = {
    data,
    xField: "datatime",
    yField: "count",
  };
  return <Area {...config} />;
}
function TrendCard(props: { data: BehaviorData["trendData"][0] }) {
  const { data } = props;
  const { pathname, trend = [] } = data;
  return (
    <div className=" p-4 bg-slate-50 rounded ">
      <div className=" font-semibold  text-gray-700 mb-4">
        页面路径:
        <span className=" text-blue-900 inline-block ml-2">{pathname}</span>
      </div>
      <div>
        <TrendChart data={props.data.trend}></TrendChart>
      </div>
    </div>
  );
}

export default TrendCard;
