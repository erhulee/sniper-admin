import DigitalCard from "@/components/digital-card";
import { Column } from "@ant-design/charts";
import { List } from "antd";
import dayjs from "dayjs";

type IssueDetailProps = {
  occurrences_count: number;
  impacts_count: number;
  // window_count: number
  // mac_count: number
  trendData: Array<{
    datetime: number;
    count: number;
  }>;

  paths: Array<{
    _id: string;
    occurrences_count: number;
  }>;
};

function IssueDetail(props: Partial<IssueDetailProps>) {
  const {
    impacts_count = 0,
    occurrences_count = 0,
    paths = [],
    trendData = [],
  } = props;
  const config = {
    data: trendData.map((i) => ({
      ...i,
      datetime: dayjs(i.datetime).format("MM-DD HH:mm:ss"),
    })),
    xField: "datetime",
    yField: "count",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
  };
  return (
    <>
      <div className=" font-semibold">总体概览</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <DigitalCard
          value={occurrences_count}
          direction="horizontal"
          unit="次"
          specific="发生总次数"
          className=" bg-indigo-50 p-4 rounded-lg"
        />
        <DigitalCard
          value={impacts_count}
          direction="horizontal"
          unit="人"
          specific="影响人数"
          className=" bg-indigo-50 p-4 rounded-lg"
        />
      </div>

      {/* <div className="flex justify-around items-center p-4 bg-primary-100 mt-5 rounded-lg ">
          <div className="text-xl flex items-center text-primary">
            <WindowsIcon />
            <span className="ml-2">200</span>
          </div>
          <div className="text-xl flex items-center text-primary">
            <MacIcon />
            <span className="ml-2">200</span>
          </div>
        </div> */}

      <div>
        <div className="mt-4">
          <Column {...config} />
        </div>

        <List
          dataSource={paths}
          renderItem={(item) => (
            <div className=" flex justify-between items-center  mt-2 p-2 bg-gray-200 ">
              <span className=" font-semibold">{item._id}</span>
              <span className=" text-primary-900">
                {item.occurrences_count} 次
              </span>
            </div>
          )}
        ></List>
      </div>
    </>
  );
}

export default IssueDetail;
