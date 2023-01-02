import { Button, List, Tag } from "antd";
import { type2tagColor } from "./contant";
import { bar } from "./fakeData";
import { Column } from "@ant-design/charts";
import { useNavigate } from "react-router-dom";
interface DataType {
  id: string
  type: "JS Error";
  name: string;
  // 发生错误的细节
  detail?: string;
  datetime: {
    format: string,
    raw: Date
  }

  // 按照全局粒度降级的数据
  countList: Array<{
    datetime: {
      format: string,
      raw: Date
    }
    count: number;
  }>;

  countAll: number;
}
function BarChart() {
  return (
    <Column
      data={bar}
      xField="城市"
      yField="销售额"
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
function ErrorListTable() {
  const errorList: DataType[] = [
    {
      id: "1",
      type: "JS Error",
      name: "CustomizeError",
      datetime: {
        format:"2023/01/02",
        raw: new Date(),
      },
      countList: [
        {
          datetime: {
            format:"2023/01/02",
            raw: new Date(),
          },
          count: 1,
        },
      ],
      countAll: 1,
    },
    {
      id: "1",
      type: "JS Error",
      name: "CustomizeError",
      datetime: {
        format:"2023/01/02",
        raw: new Date(),
      },
      countList: [
        {
          datetime: {
            format:"2023/01/02",
            raw: new Date(),
          },
          count: 1,
        },
      ],
      countAll: 1,
    },
  ];
  const navigate = useNavigate();

  const handleClick = (item: DataType)=>{
    const {type, id} = item;
    if(type == "JS Error"){
      navigate(`js/${id}`)
    }
  }

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
                  <span style={{marginRight:"5px"}} >{item.datetime.format}</span>
                  <a href="https://ant.design">{item.name}</a>
                </span>
              }
              description={item.detail}
            />
            <div style={{ flex: "3", marginRight: "50px", marginLeft: "50px" }}>
              <BarChart />
            </div>
            <Button type="primary" onClick={()=> handleClick(item) }  >去处理</Button>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ErrorListTable;
