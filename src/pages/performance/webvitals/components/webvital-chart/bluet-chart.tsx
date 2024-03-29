type BluetChartProps = {
  data: {
    good: number;
    "needs-improvement": number;
    bad: number;
  };
  className: string;
};

function BluetChart(props: BluetChartProps) {
  return (
    <div className={`${props.className} flex flex-row h-4 `}>
      <div
        style={{
          backgroundColor: "#2BA185",
          flex: 1,
          flexGrow: props.data.good,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#F5B000",
          flex: 1,
          flexGrow: props.data["needs-improvement"],
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#F55459",
          flex: 1,
          flexGrow: props.data.bad,
        }}
      ></div>
    </div>
  );
}

export default BluetChart;
