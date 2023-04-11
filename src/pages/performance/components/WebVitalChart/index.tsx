import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Collapse, Radio, Tooltip } from "antd";
import BluteChart from "./BluteChart";
import IconBad from "./icons/IconBad";
import IconNormal from "./icons/IconNormal";
import IconSmile from "./icons/IconSmile";
import TrendChart from "./TrendChart";

type WebVitalChartProps = {
  title: string;
  tooltip: string;
  proportion: {
    good: number;
    ["needs-improvement"]: number;
    bad: number;
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

function SelectItem(props: {
  path: string;
  partition: {
    bad: number;
    good: number;
    ["needs-improvement"]: number;
  };
}) {
  const { path, partition } = props;
  return (
    <div className="flex border-t border-t-gray-light py-4">
      <Radio className="mr-4" value={true} />
      <div className="flex-row flex justify-between w-full  ">
        <span className=" hover:text-primary cursor-pointer font-semibold">
          {path}
        </span>
        <BluteChart data={partition} className=" w-60"></BluteChart>
      </div>
    </div>
  );
}

function WebVitalChart(props: WebVitalChartProps) {
  const { title, tooltip, className, proportion, trendData, path_performance } =
    props;
  const good = (proportion.good * 100).toFixed(0);
  const general = (proportion["needs-improvement"] * 100).toFixed(0);
  const bad = (proportion.bad * 100).toFixed(0);

  return (
    <Collapse defaultActiveKey={["1"]}>
      <Collapse.Panel
        header={
          <div className="text-gray-default flex items-start mb-4 flex-col">
            <span className="font-semibold text-gray-dark mr-4 text-xl ">
              {title}
            </span>
            <div className="my-2">{tooltip}</div>
          </div>
        }
        key="1"
      >
        <div className="flex flex-row items-center">
          <span className="flex flex-row items-center mr-8">
            <IconSmile></IconSmile>
            <span className="ml-1"> 良好 {good}%</span>
          </span>
          <span className="flex flex-row items-center mr-8">
            <IconNormal></IconNormal>
            <span className="ml-2"> 一般 {general}%</span>
          </span>
          <span className="flex flex-row items-center mr-8">
            <IconBad></IconBad>
            <span className="ml-2"> 较差 {bad}%</span>
          </span>
        </div>
        <div className="my-4">
          <TrendChart data={trendData}></TrendChart>
        </div>

        {path_performance.map((pathItem) => (
          <SelectItem {...pathItem}></SelectItem>
        ))}
      </Collapse.Panel>
    </Collapse>
  );
}
export default WebVitalChart;
