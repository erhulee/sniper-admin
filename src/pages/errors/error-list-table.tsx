import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";
interface DataType {
    type: "JS Error"
    name: string,
    // 发生错误的细节
    detail?: string,
    datetime: Date,

    // 按照全局粒度降级的数据
    countList: Array<{
        datetime: Date,
        count: number
    }> 

    countAll: number,
}

function ErrorListTable() {
  const errorList: DataType[] = [
    {
        type:"JS Error",
        name:"CustomizeError",
        datetime: new Date(),
        countList:[
            {
                datetime: new Date(),
                count:1
            }
        ],
        countAll:1
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "发生次数",
      dataIndex: "countAll",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      columns={columns}
      dataSource={errorList}
    />
  );
}

export default ErrorListTable;
