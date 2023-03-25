import { useState } from "react";

import { Line } from "@ant-design/plots";

function TrendChart(props: { data: any[] }) {
  const config = {
    data: props.data || [],
    xField: "date",
    yField: "count",
    seriesField: "dgree",
    color: ["#1979C9", "#D62A0D", "#FAA219"],
  };

  return <Line {...config} />;
}
export default TrendChart;
