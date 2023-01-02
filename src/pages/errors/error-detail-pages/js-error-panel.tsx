import { Button, TimePicker } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import DigitalCard from "../../../components/digital-card";
import WindowsIcon from "../../../assets/icons/WindowsIcon";
import MacIcon from "../../../assets/icons/MacIcon";
import { bar } from "../fakeData";
import { Column } from "@ant-design/charts";
import TimeFilter from "../../../components/time-filter";
const RangePicker = TimePicker.RangePicker
function Title() {
  return (
    <div className="flex justify-between">
      <div>
        <div className=" text-indigo-900 font-semibold">
          UncaughtInPromiseError
        </div>
        <div className=" flex mt-1">
          <div className=" text-gray-600 text-sm mr-4">
            error is not defined
          </div>
          <div className=" text-sm">2023-01-02 17:59:15 </div>
        </div>

        <div className="mt-2">
          <Button style={{ marginRight: "10px" }} type="primary">
            解决
          </Button>
          <Button style={{ marginRight: "10px" }}>忽略</Button>
          <Button
            type="link"
            className=" text-indigo-400 hover:text-indigo-300"
          >
            查看录屏
          </Button>
        </div>
      </div>

      <div>
        <Button
          icon={<LeftOutlined />}
          type="primary"
          className="mr-1"
        ></Button>
        <Button icon={<RightOutlined />} type="primary"></Button>
      </div>
    </div>
  );
}

function EnvCard() {
  return (
    <div className="mt-7">
      <div className="font-semibold text-indigo-900">UserAgent</div>
      <div className="mt-4 font-medium text-sm ">
        Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36
        (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36
      </div>
    </div>
  );
}

function ErrorStack() {
  return (
    <div className="mt-7">
      <div className="font-semibold text-indigo-900">错误堆栈</div>
      <div className="mt-4 font-medium text-sm ">
        Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36
        (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36
      </div>
    </div>
  );
}

function BarChart(){
    const config = {
        data: bar,
        xField: '城市',
        yField: '销售额',
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
        width:100
      };
    
      return <Column {...config} />;
}
function JsErrorPanel() {
  return (
    <div className="flex">
      <div style={{ flexGrow: "3", flexBasis:"1" }}  className="flex-1">
        <Title></Title>
        <EnvCard></EnvCard>
        <ErrorStack></ErrorStack>
      </div>

      <div style={{ flexGrow: "2", flexBasis:"1" }} className="ml-4 flex-1">
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

        <div className="flex justify-around items-center p-4 bg-primary-100 mt-5 rounded-lg " >
            <div className="text-xl flex items-center text-primary" >
                <WindowsIcon/>
                <span className="ml-2" >200</span>
            </div>
            <div className="text-xl flex items-center text-primary" >
                <MacIcon/>
                <span className="ml-2" >200</span>
            </div>
        </div>

        <div>
            <TimeFilter className="my-5" ></TimeFilter>
            <BarChart ></BarChart>
        </div>

      </div>
    </div>
  );
}
export default JsErrorPanel;
