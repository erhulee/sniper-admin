import { Button, List } from "antd";
import { SettingOutlined } from "@ant-design/icons";
// import ButtonGroup from "antd/es/button/button-group";
import { Alarm } from "@/api/alaram";
import { Rule } from "./Rule";

function AlarmItem(props: Alarm) {
  return (
    <div className=" p-2">
      <div className=" flex justify-between items-center">
        <span className=" text-primary-900 font-semibold text-lg ">
          {props.buzzerName || "unknown"}
        </span>
      </div>
      <div className=" text-gray-500 text-sm">
        <Rule rule={props.rule}></Rule>
      </div>
    </div>
  );
}
export default function AlarmList(props: {
  data: Alarm[];
  openModal: () => void;
}) {
  const data = props.data;
  return (
    <div className="p-5 overflow-hidden hover:overflow-y-auto h-full pt-0">
      <div className=" flex items-center justify-between mb-4 sticky top-0  bg-white z-10   pt-5 pb-1 ">
        <Button icon={<SettingOutlined />}></Button>
        <div className=" text-primary-900 font-semibold text-base">
          今日告警
        </div>
        {/* <ButtonGroup>
          <Button type="primary" onClick={props.openModal}>
            添加
          </Button>
        </ButtonGroup> */}
      </div>

      <List
        dataSource={data}
        renderItem={(item) => <AlarmItem {...item}></AlarmItem>}
      ></List>
    </div>
  );
}
