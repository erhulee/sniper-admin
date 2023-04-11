import { useState } from "react";

import { Line } from "@ant-design/plots";

function TrendChart(props: { data: any[] }) {
  const config = {
    data: props.data || [],
    xField: "date",
    yField: "count",
    seriesField: "degree",
    color: ({ degree }: any) => {
      return degree === "bad"
        ? "#F4664A"
        : degree === "good"
        ? "#30BF78"
        : "#FAAD14";
    },
  };

  return <Line {...config} />;
}
export default TrendChart;
