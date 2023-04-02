import { Table, TableProps } from "antd";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function SourceMapTable(props: {
  data?: any[];
  deleteFile: (id: string, fileName: string) => Promise<any>;
}) {
  const { data = [], deleteFile } = props;
  const columns: TableProps<any>["columns"] = [
    {
      dataIndex: "fileName",
      title: "文件名",
      key: "fileName",
      render: (value, record) => {
        return <a href={record.filePath}>{value}</a>;
      },
    },
    {
      dataIndex: "size",
      title: "大小",
      key: "size",
      render: (value) => formatBytes(value),
    },
    {
      dataIndex: "createTime",
      title: "上传时间",
      key: "createTime",
      render: (value) => {
        return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      dataIndex: "",
      title: "操作",
      key: "action",
      render: (_, record) => {
        return (
          <div>
            <DeleteOutlined
              className="mr-4"
              onClick={() => {
                deleteFile(record._id, record.fileName);
              }}
            />
            <a href={record.filePath}>
              <DownloadOutlined />
            </a>
          </div>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default SourceMapTable;
