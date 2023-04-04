import { Button, List, Tag } from "antd";
import { type2tagColor } from "./contant";
import { Column } from "@ant-design/charts";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import dayjs from "dayjs";
interface DataType {
  id: string;
  type: "JS Error";
  name: string;
  // 发生错误的细节
  detail?: string;
  datetime: {
    format: string;
    raw: Date;
  };

  // 按照全局粒度降级的数据
  countChartData: Array<{
    date: string;
    count: number;
  }>;

  countAll: number;
}
function BarChart(props: {
  data: Array<{
    count: number;
    date: string;
  }>;
}) {
  return (
    <Column
      data={props.data || []}
      xField="date"
      yField="count"
      xAxis={{
        tickLine: null,
      }}
      yAxis={{
        tickLine: null,
        tickCount: 0,
      }}
      autoFit={true}
      height={100}
    />
  );
}
function ErrorListTable(props: {
  data: Array<{
    id: string;
    message: string;
    // name: string;
    loggers: any[];
  }>;
}) {
  const errorList: DataType[] = props.data.map((item) => {
    const mostLastTime = (item.loggers.find((log) => log.count !== 0) || {})
      .date;

    return {
      id: item.id,
      type: "JS Error",
      name: item.message,
      datetime: {
        format: dayjs(mostLastTime).format("YYYY/MM/DD HH时"),
        raw: mostLastTime,
      },
      countChartData: item.loggers.map((log) => ({
        count: log.count,
        date: dayjs(log.date).format("YYYY/MM/DD HH时"),
      })),
      countAll: item.loggers.reduce((pre, cur) => pre.count + cur.count),
    };
  });

  const navigate = useNavigate();

  const handleClick = (item: DataType) => {
    const { type, id } = item;
    if (type == "JS Error") {
      navigate(`/dashboard/error/js?issueId=${id}`);
    }
  };

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={errorList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <span>
                  <Tag color={type2tagColor[item.type]}>{item.type}</Tag>
                  <span style={{ marginRight: "5px" }}>
                    {item.datetime.format}
                  </span>
                  <a href="https://ant.design">{item.name}</a>
                </span>
              }
              description={item.detail}
            />
            <div style={{ flex: "3", marginRight: "50px", marginLeft: "50px" }}>
              <BarChart data={item.countChartData} />
            </div>
            <Button type="primary" onClick={() => handleClick(item)}>
              去处理
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ErrorListTable;
