import { TraceType } from "@/api/trace";

export const columns: any = [
  {
    title: "埋点名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "埋点描述",
    dataIndex: "des",
    key: "des",
  },
  {
    title: "埋点类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "相关属性",
    dataIndex: "properties",
    key: "properties",
    render: (item = []) => {
      return <div>{item.join("、")}</div>;
    },
  },
  {
    title: "当日上报数量",
    dataIndex: "count",
    key: "count",
  },
];

export const TypeEnumMap = {
  [TraceType.Business]: "业务埋点",
  [TraceType.Performance]: "性能埋点",
};
export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
export const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 5 },
  },
};
