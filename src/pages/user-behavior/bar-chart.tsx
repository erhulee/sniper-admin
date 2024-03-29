import { BehaviorData } from "@/api/types/behavior";
import { Column } from "@ant-design/plots";

const StackBar = (props: { data: BehaviorData["barData"] }) => {
  const { data } = props;

  const config: any = {
    data: data,
    isStack: true,
    xField: "datetime",
    yField: "count",
    seriesField: "path",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };

  return <Column {...config} legend={{ position: "top-left" }} />;
};

export default StackBar;
