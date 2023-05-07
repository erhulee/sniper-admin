import DotIcon from "@/assets/icons/dotIcon";
import { Divider, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import BluetChart from "./bluet-chart";
import TrendChart from "./trend-chart";
type WebVitalChartProps = {
  title: string;
  tooltip: string;
  name: string;
  proportion: {
    good: string;
    ["needs-improvement"]: string;
    bad: string;
  };
  trendData?: any;
  routeList?: any;
  className?: string;
  path_performance: Array<{
    path: string;
    partition: {
      bad: number;
      good: number;
      ["needs-improvement"]: number;
    };
  }>;
};

function PathItem(props: {
  path: string;
  partition: {
    bad: number;
    good: number;
    ["needs-improvement"]: number;
  };
  rank: number;
}) {
  const { path, partition } = props;
  return (
    <div className="flex border-t border-t-gray-light py-4 items-center">
      <DotIcon></DotIcon>
      <div className="flex-row flex justify-between w-full ml-4 items-center ">
        <span className=" hover:text-primary cursor-pointer font-semibold">
          {path}
        </span>
        <BluetChart data={partition} className=" w-60"></BluetChart>
      </div>
    </div>
  );
}

function WebVitalChart(props: WebVitalChartProps) {
  const { title, tooltip, proportion, trendData, path_performance, name } =
    props;
  const { bad, good, "needs-improvement": general } = proportion;
  return (
    <div className="bg-white py-4 px-4  border-solid border-2  rounded-md  border-gray-50">
      <div className="text-gray-default mb-4 flex items-center">
        <span className="font-semibold text-gray-dark mr-4 text-xl ">
          {title}
        </span>
        <Divider orientation="left" type="vertical"></Divider>
        <span className=" font-medium text-gray-700"> {name}</span>
        <Divider orientation="left" type="vertical"></Divider>
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined></QuestionCircleOutlined>
        </Tooltip>
      </div>

      <div className="my-4">
        <TrendChart
          data={trendData}
          legendValue={{ bad, good, general }}
        ></TrendChart>
      </div>

      <div className="max-h-36 overscroll-auto">
        {path_performance
          .filter((pathItem) => pathItem.path)
          .map((pathItem, index) => (
            <PathItem {...pathItem} rank={index + 1}></PathItem>
          ))}
      </div>
    </div>
  );
}
export default WebVitalChart;
