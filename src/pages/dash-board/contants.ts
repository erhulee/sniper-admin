import {
  UserOutlined,
  RadarChartOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  AlertOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import React from "react";
export const menuItems = [
  {
    key: "performance",
    icon: React.createElement(RadarChartOutlined),
    label: "性能分析",
  },
  {
    key: "error",
    icon: React.createElement(ExclamationCircleOutlined),
    label: "错误分析",
    children: [
      {
        key: "collection",
        label: "错误收集",
      },
      {
        key: "sourcemap",
        label: "sourcemap管理",
      },
    ],
  },
  {
    key: "behavior",
    icon: React.createElement(UserOutlined),
    label: "用户行为",
  },
  {
    key: "alarm",
    label: "告警设置",
    icon: React.createElement(AlertOutlined),
  },
  {
    key: "trace",
    icon: React.createElement(RocketOutlined),
    label: "埋点管理",
  },
];
