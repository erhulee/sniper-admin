import { addBuzzer, Buzzer, deleteBuzzer, updateBuzzer } from "@/api/alaram";
import useModal from "@/hooks/useModal";
import { Button, Switch, Table, Tag } from "antd";
import dayjs from "dayjs";
import { cloneDeep } from "lodash";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AlarmDrawer from "./alarm-drawer";
import { Rule } from "./Rule";
function generateTableData(data?: Buzzer[]) {
  if (data == null) return;
  const tableData = data.map((item) => {
    return {
      bid: item._id!,
      title: item.name,
      notify: item.notifyType,
      rule: item.rule,
      createTime: dayjs(item.createTime).format("YYYY-MM-DD HH时"),
      status: item.status,
    };
  });
  return tableData;
}

export default function BuzzerTable(props: {
  data: Buzzer[];
  refetch: Function;
}) {
  const [visible, open, close] = useModal();
  const queryClient = useQueryClient();
  const { data, refetch } = props;
  // 判断现在是 编辑还是新增
  const [editingBuzzer, setEditBuzzer] = useState<Buzzer | null>(null);
  const updateMutation = useMutation({
    mutationFn: updateBuzzer,
    onMutate: (buzzerData) => {
      queryClient.setQueryData(["buzzer_list"], (buzzer_list) => {
        const data: any = cloneDeep(buzzer_list) as any[];
        const list: any[] = data.data;
        const index = list.findIndex((item) => item._id == buzzerData._id);
        list.splice(index, 1, buzzerData);
        return data;
      });
    },
  });
  async function handleDeleteBuzzer(id: string) {
    await deleteBuzzer({ _id: id });
    refetch();
  }

  async function handleSaveBuzzer(
    buzzerData: Omit<Buzzer, "appid" | "notifyType" | "createTime">
  ) {
    if (editingBuzzer !== null) {
      // 编辑
      await updateMutation.mutateAsync({
        ...buzzerData,
        _id: editingBuzzer._id,
      });
    } else {
      // 新增
      await addBuzzer(buzzerData);
      refetch();
    }
    close();
  }

  async function handleSwitchStatus(bid: string, status: boolean) {
    const newStats = cloneDeep(data.find((item) => item._id === bid))!;
    newStats.status = status;
    updateBuzzer(newStats);
    await updateMutation.mutateAsync(newStats);
  }
  return (
    <div className=" mt-4 bg-primary-20 flex flex-col bg-white flex-1 rounded-lg border-2 border-gray-100    ">
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
                return (
                  <Switch
                    checked={value}
                    onChange={(checked) => {
                      handleSwitchStatus(record.bid, checked);
                    }}
                  ></Switch>
                );
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
              title: () => (
                <Button
                  type="primary"
                  onClick={() => {
                    setEditBuzzer(null);
                    open();
                  }}
                >
                  添加
                </Button>
              ),
              render: (value, record) => (
                <div className=" flex">
                  <Button
                    size="small"
                    type="primary"
                    className="mr-2"
                    onClick={() => {
                      setEditBuzzer(
                        data.find((item) => item._id == record.bid)!
                      );
                      console.log(data.find((item) => item._id == record.bid)!);
                      open();
                    }}
                  >
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
      <AlarmDrawer
        visible={visible}
        save={(data) => {
          close();
          handleSaveBuzzer(data);
        }}
        close={close}
        formValue={editingBuzzer}
      ></AlarmDrawer>
      ;
    </div>
  );
}
