import { Button, Divider, List, Tag } from "antd";
import { type2tagColor } from "./contant";
import { Column } from "@ant-design/charts";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import dayjs from "dayjs";
/**
对于 JS 错误会有特殊的处理

普通的结构 
0. id? -> string (issueId 非logid)
1. type -> tag
2. name -> string
3. detail? -> string (补充信息)
4. last_timestamp -> number上一次发生时间
5. trend -> array<timestamp, count>

*/

function ErrorListTable(props: {
  data: Array<{
    id?: string;
    type: string;
    name: string;
    detail?: string;
    last_timestamp: number;
    trend: Array<{ timestamp: number; count: number }>;
  }>;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item>
            <div className="w-full flex items-center justify-between ">
              <div className=" w-5/12 flex-1 ">
                <div className=" flex ">
                  <div
                    className="font-semibold text-primary-500 "
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      flex: 1,
                    }}
                  >
                    {item.name}
                  </div>
                  {item.detail && (
                    <>
                      <Divider type="vertical"></Divider>
                      <div
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          flex: 1,
                        }}
                      >
                        {item.detail}
                      </div>
                    </>
                  )}
                </div>
                <div className="flex mt-2">
                  <Tag color={type2tagColor[item.type]}>{item.type}</Tag>
                  <div style={{ marginRight: "5px" }}>
                    最近一次错误:{" "}
                    {dayjs(item.last_timestamp).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                </div>
              </div>
              <div
                className="h-2/4  w-2/5 rounded-lg  mx-4 "
                style={{ backgroundColor: "#E9EBF7" }}
              >
                <Column
                  data={(item.trend || []).map((i) => ({
                    ...i,
                    timestamp: dayjs(i.timestamp).format("YYYY-MM-DD HH:00:00"),
                  }))}
                  xField="timestamp"
                  yField="count"
                  xAxis={{
                    tickLine: null,
                    label: null,
                    line: null,
                  }}
                  yAxis={{
                    tickLine: null,
                    tickCount: 0,
                  }}
                  tooltip={{
                    customItems: (originalItems) => {
                      return originalItems.map((item) => ({
                        ...item,
                        name: "次数",
                      }));
                    },
                  }}
                  height={50}
                />
              </div>
              {item.type === "运行错误" && (
                <Button
                  type="primary"
                  onClick={() => {
                    navigate(`/dashboard/error/js?issueId=${item.id}`);
                  }}
                >
                  去处理
                </Button>
              )}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ErrorListTable;
