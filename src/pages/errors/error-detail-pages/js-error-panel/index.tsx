import { Column } from "@ant-design/charts";
import MacIcon from "../../../../assets/icons/MacIcon";
import WindowsIcon from "../../../../assets/icons/WindowsIcon";
import DigitalCard from "../../../../components/digital-card";
import TimeFilter from "../../../../components/time-filter";
import ErrorPathList from "./components/error-path-list";
import { useLocation } from "react-router-dom";
import { queryErrorDetail } from "@/api/error";
import { useQuery } from "react-query";
import QueryOuter from "@/wrapper/QueryOuter";

import ErrorStack from "./components/stack-card";
import ActionManager from "./components/actionManager";
function query2Object(search: string) {
  const obj: any = {};
  search.split("=").forEach((_, index, array) => {
    if (index % 2 !== 0) return;
    obj[array[index]] = array[index + 1];
  });
  return obj;
}

//TODO hightlight.js

function BarChart() {
  const config = {
    data: [],
    xField: "城市",
    yField: "销售额",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
    // autoFit: true,
    width: 100,
  };
  return <Column {...config} />;
}
function JsErrorPanel() {
  const issueId = query2Object(useLocation().search.substr(1)).issueId;
  const issueQuery = useQuery({
    queryKey: "issue-info",
    queryFn: () => queryErrorDetail(issueId),
    initialData: {
      data: {
        message: "",
        resolveTime: 0,
        stack: "",
        status: 0,
        _id: "",
      },
    },
  });

  return (
    <div className="flex ">
      <div
        style={{ flexGrow: "3", flexBasis: "1" }}
        className="flex-1 border-r-primary-100 border-solid border-r-1 border-y-0 border-l-0  pr-5 "
      >
        <ActionManager
          name={issueQuery.data?.data.message || "unknown"}
          status={issueQuery.data?.data.status || 0}
          resolvedTime={issueQuery.data?.data.resolveTime || 0}
        ></ActionManager>
        <QueryOuter
          isSuccess={issueQuery.isSuccess}
          isFetching={issueQuery.isFetching}
          isError={issueQuery.isError}
        >
          <ErrorStack stack={issueQuery.data?.data.stack ?? ""}></ErrorStack>
        </QueryOuter>
      </div>

      <div style={{ flexGrow: "2", flexBasis: "1" }} className="ml-5 flex-1">
        <div className=" font-semibold">总体概览</div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <DigitalCard
            value={1000}
            direction="horizontal"
            unit="次"
            specific="发生总次数"
            className=" bg-indigo-50 p-4 rounded-lg"
          />
          <DigitalCard
            value={1000}
            direction="horizontal"
            unit="人"
            specific="影响人数"
            className=" bg-indigo-50 p-4 rounded-lg"
          />
        </div>

        <div className="flex justify-around items-center p-4 bg-primary-100 mt-5 rounded-lg ">
          <div className="text-xl flex items-center text-primary">
            <WindowsIcon />
            <span className="ml-2">200</span>
          </div>
          <div className="text-xl flex items-center text-primary">
            <MacIcon />
            <span className="ml-2">200</span>
          </div>
        </div>

        <div>
          <TimeFilter className="my-5"></TimeFilter>
          <BarChart></BarChart>
          <ErrorPathList></ErrorPathList>
        </div>
      </div>
    </div>
  );
}
export default JsErrorPanel;
