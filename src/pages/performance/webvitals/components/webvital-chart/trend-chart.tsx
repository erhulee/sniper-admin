import { Line } from "@ant-design/plots";

function TrendChart(props: {
  data: any[];
  legendValue: {
    bad: string;
    good: string;
    general: string;
  };
}) {
  const { bad, good, general } = props.legendValue;
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

  return (
    <Line
      {...config}
      height={200}
      legend={{
        itemName: {
          formatter: (text: string) => {
            switch (text) {
              case "bad":
                return "差劲:" + bad + "%";
              case "good":
                return "良好:" + good + "%";
              default:
                return "一般:" + general + "%";
            }
          },
        },
      }}
    />
  );
}
export default TrendChart;
