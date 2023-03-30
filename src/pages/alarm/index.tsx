import { Button, List, Table, Tag } from "antd";
import useModal from "../../hooks/useModal";
import BarChart from "./bar-chart";
import { AlarmRule, ReturnAPIResultType } from "../types";
import { SettingOutlined } from "@ant-design/icons";
import AlarmDrawer from "./alarm-drawer";
import ButtonGroup from "antd/es/button/button-group";
import { useQuery } from "react-query";
import { AlarmOperator, queryBuzzer, SupportRuleName } from "@/api/alaram";
import { subscribeKey } from "valtio/utils";
import { globalFilterStore } from "@/store";
import dayjs from "dayjs";
type AlarmData = {
  name: string;
  rule: AlarmRule;
};

function AlarmItem(props: AlarmData) {
  return (
    <div className=" p-2">
      <div className=" flex justify-between items-center">
        <span className=" text-primary-900"> {props.name}</span>
      </div>
      <div className=" text-gray-500 text-sm">{formatRule(props.rule)}</div>
    </div>
  );
}
function AlarmList() {
  const [visible, open, close] = useModal();
  const data: AlarmData[] = [
    // {
    //   name: "重要的JS错误",
    //   rule: {
    //     name: "CC",
    //     oprator: AlarmOprator.eq,
    //     value: 200,
    //   },
    // },
    // {
    //   name: "重要的JS错误",
    //   rule: {
    //     name: "CC",
    //     oprator: AlarmOprator.eq,
    //     value: 200,
    //   },
    // },
  ];
  return (
    <div className="">
      <AlarmDrawer visible={visible} close={close}></AlarmDrawer>
      <div className=" flex items-center justify-between mb-4 ">
        <Button icon={<SettingOutlined />}></Button>
        <div className=" text-primary-900 font-semibold text-base">
          今日告警
        </div>
        <ButtonGroup>
          <Button type="primary" onClick={open}>
            添加
          </Button>
        </ButtonGroup>
      </div>

      <List
        dataSource={data}
        renderItem={(item) => <AlarmItem {...item}></AlarmItem>}
      ></List>
    </div>
  );
}

function AlarmChart() {
  return (
    <div className="  px-7 ">
      <div className=" mb-4 text-xl  font-semibold ">告警个数总览(天)</div>
      <BarChart></BarChart>
    </div>
  );
}

function BuzzerList() {
  const { data, refetch } = useQuery({
    queryKey: ["buzzer_list"],
    queryFn: queryBuzzer,
    enabled: false,
    initialData: { success: true, data: [] },
  });

  function generateTableData(data?: ReturnAPIResultType<typeof queryBuzzer>) {
    function formateRule(rule: {
      name: SupportRuleName;
      operator: AlarmOperator;
      value: number;
    }) {
      const { name, operator, value } = rule;
      return `${name} ${operator} ${value}`;
    }
    if (data == null) return;
    const tableData = data.data.map((item) => {
      return {
        bid: item._id,
        title: item.name,
        notify: item.notifyType,
        rule: formateRule(item.rule),
        createTime: dayjs(item.createTime).format("YYYY-MM-DD HH时"),
      };
    });

    return tableData;
  }

  subscribeKey(globalFilterStore, "selectedProject", (v) => {
    refetch();
  });

  return (
    <div className=" mt-4 bg-primary-20 ">
      <div className=" flex justify-end bg-primary-100 p-2 pr-4 ">
        <Button size="small" type="primary" className=" mr-2">
          添加
        </Button>
        <Button
          size="small"
          className=" bg-red-500 text-white hover:bg-red-400 "
        >
          删除
        </Button>
      </div>

      <Table
        dataSource={generateTableData(data)}
        rowSelection={{
          type: "checkbox",
        }}
        columns={[
          {
            dataIndex: "title",
            title: "名称",
            key: "title",
          },
          {
            dataIndex: "rule",
            key: "rule",
            title: "规则",
          },
          {
            key: "createTime",
            dataIndex: "createTime",
            title: "创建时间",
          },
          {
            key: "notify",
            dataIndex: "notify",
            title: "通知方式",
            render: () => {
              return <Tag color="blue">飞书</Tag>;
            },
          },
          {
            dataIndex: "",
            width: 2,
            render: () => (
              <div className=" flex">
                <Button size="small" type="primary" className="mr-2">
                  编辑
                </Button>
                <Button
                  size="small"
                  className=" hover:bg-red-400 bg-red-500 text-white "
                >
                  删除
                </Button>
              </div>
            ),
          },
        ]}
      ></Table>
    </div>
  );
}
function Alarm() {
  return (
    <div>
      <div className=" flex justify-between  ">
        <div className=" mr-8 flex-auto ">
          <AlarmChart></AlarmChart>
          <BuzzerList></BuzzerList>
        </div>
        <div
          className="p-5 border border-solid border-primary-100 bg-slate-50 flex-1 "
          style={{ minWidth: "300px" }}
        >
          <AlarmList></AlarmList>
        </div>
      </div>
    </div>
  );
}

export default Alarm;
