import { BehaviorData } from "@/api/types/behavior";
import { Area } from "@ant-design/charts";

function TrendChart(props: { data: any[] }) {
  const config = {
    data: props.data,
    xField: "datatime",
    yField: "count",
  };
  return <Area {...config} />;
}
function TrendCard(props: { data: BehaviorData["trendData"][0] }) {
  const { data } = props;
  const { path, trend = [] } = data;
  return (
    <div className=" p-4 bg-slate-50 rounded ">
      <div className=" font-semibold  text-gray-700 mb-4">
        页面路径:
        <span className=" text-blue-900 inline-block ml-2">{path}</span>
      </div>
      <div>
        <TrendChart data={props.data.trend}></TrendChart>
      </div>
    </div>
  );
}

export default TrendCard;
