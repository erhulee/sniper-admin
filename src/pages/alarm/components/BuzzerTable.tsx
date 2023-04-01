import { BuzzerParams, deleteBuzzer, queryBuzzer } from "@/api/alaram";
import { ReturnAPIResultType } from "@/pages/types";
import QueryOuter from "@/wrapper/QueryOuter";
import { Button, Switch, Table, Tag } from "antd";
import dayjs from "dayjs";
import { Rule } from "./Rule";

export default function BuzzerTable(props: {
  data: ({
    _id: string;
  } & BuzzerParams)[];
  refetch: Function;
}) {
  function generateTableData(
    data?: ReturnAPIResultType<typeof queryBuzzer>["data"]
  ) {
    if (data == null) return;
    const tableData = data.map((item) => {
      return {
        bid: item._id,
        title: item.name,
        notify: item.notifyType,
        rule: item.rule,
        createTime: dayjs(item.createTime).format("YYYY-MM-DD HH时"),
        status: item.status,
      };
    });

    return tableData;
  }

  async function handleDeleteBuzzer(id: string) {
    await deleteBuzzer({ _id: id });
    props.refetch();
  }

  return (
    <div className=" mt-4 bg-primary-20 flex flex-col h-full">
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
      <div className="flex-1 h-full ">
        <Table
          dataSource={generateTableData(props.data)}
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
              render: (value) => <Rule rule={value} />,
            },
            {
              key: "createTime",
              dataIndex: "createTime",
              title: "创建时间",
            },
            {
              key: "status",
              dataIndex: "status",
              title: "生效",
              render: (value: any, record: any) => {
                return <Switch checked={value}></Switch>;
              },
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
              render: (value, record) => (
                <div className=" flex">
                  <Button size="small" type="primary" className="mr-2">
                    编辑
                  </Button>
                  <Button
                    size="small"
                    className=" hover:bg-red-400 bg-red-500 text-white "
                    onClick={() => handleDeleteBuzzer(record.bid)}
                  >
                    删除
                  </Button>
                </div>
              ),
            },
          ]}
        ></Table>
      </div>
    </div>
  );
}
