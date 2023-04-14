import { Button, Col, Input, Row, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import AdditionDrawer from "./additionDrawer";
import useModal from "../../hooks/useModal";
import { deleteTrace, queryTrace, Trace } from "../../api/trace";
import { useState } from "react";
import { useQuery } from "react-query";
import { columns } from "./constants";
import { useMemo } from "react";
import QueryOuter from "@/wrapper/QueryOuter";

function TracePage() {
  const [visible, open, close] = useModal();
  const { data, isError, refetch, isFetching, isSuccess } = useQuery({
    queryKey: "traceList",
    queryFn: () => queryTrace(),
    initialData: {
      success: true,
      data: {
        total: 0,
        list: [],
      },
    },
  });

  const tableColumns = useMemo(
    () => [
      ...columns,
      {
        title: "",
        width: "200px",
        render: (text: string, record: Trace, index: number) => {
          return (
            <div>
              <Button onClick={() => editItem(record)} className=" mr-2">
                编辑
              </Button>
              <Button type="primary" onClick={() => deleteItem(record)}>
                删除
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const [modalStatus, setModalStatus] = useState<null | Trace>(null);

  const handleAddClick = () => {
    setModalStatus(null);
    open();
  };
  const deleteItem = async (item: Trace) => {
    const id = item._id!;
    await deleteTrace({ _id: id });
    refetch();
  };
  const editItem = (item: Trace) => {
    setModalStatus(item);
    open();
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex justify-between p-4 items-center text-xl font-semibold mb-4 
      bg-white  border border-solid  rounded-md border-gray-50"
      >
        <span>埋点管理</span>
        <div className=" flex">
          <Input placeholder="名称/描述"></Input>
          <Button
            onClick={handleAddClick}
            className=" mx-3 w-full "
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            新建埋点
          </Button>
        </div>
      </div>

      <div className=" flex-1 ">
        <QueryOuter
          isError={isError}
          isSuccess={isSuccess}
          isFetching={isFetching}
        >
          <Table
            className=" h-full"
            columns={tableColumns}
            dataSource={data?.data.list}
            pagination={{
              position: ["bottomCenter"],
              pageSize: 25,
            }}
          />
        </QueryOuter>
      </div>

      <AdditionDrawer
        visible={visible}
        close={close}
        refresh={refetch}
        status={modalStatus}
      ></AdditionDrawer>
    </div>
  );
}

export default TracePage;
