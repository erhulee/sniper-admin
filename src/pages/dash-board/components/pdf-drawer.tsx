import { Button, Drawer } from "antd";
import { List } from "antd";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer, Font } from "@react-pdf/renderer";
type DataType = { id: string; content: string };
type Props = {
  list: Array<DataType>;
  onDelete: (id: string) => void;
  onAdd: () => void;
  visible: boolean;
  close: () => void;
};
import alibabaFont from "../../../assets/font/NotoSansSC-Regular.otf";
import dayjs from "dayjs";
Font.register({
  family: "alibaba",
  fonts: [
    {
      src: alibabaFont,
    },
    {
      src: alibabaFont,
      fontWeight: "Bold",
    },
  ],
});
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    fontFamily: "alibaba",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
function PDFTable(props: {
  rowHead: string[];
  colHead: string[];
  data: (string | number)[][];
}) {
  function createCell(content: string | number) {
    return (
      <Text
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        {content}
      </Text>
    );
  }
  const { rowHead = [], colHead = [], data = [] } = props;
  return (
    <View
      style={{
        marginTop: 5,
        border: "1px solid #eee",
        paddingBottom: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#eee",
          fontSize: 14,
        }}
      >
        {createCell("")}
        {rowHead.map((content) => createCell(content))}
      </View>
      {data.map((rowData, index) => {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: 14,
            }}
          >
            {rowData.reduce(
              (pre, content) => {
                pre.push(createCell(content));
                return pre;
              },
              [createCell(colHead[index])]
            )}
          </View>
        );
      })}
    </View>
  );
}

function PDFList(props: {
  head: () => React.ReactNode;
  render: (item: any) => React.ReactNode;
  data: any[];
}) {
  const { head, render, data = [] } = props;
  return (
    <View>
      {head()}
      {(data || []).map((item) => render(item))}
    </View>
  );
}
function PDFDrawer(props: { data: any; visible: boolean; close: Function }) {
  const renderListItem = (item: { message: string; count: number }) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 12,
          padding: 5,
        }}
      >
        <Text style={{ flex: 1 }}>{item.message || "unknown"}</Text>
        <Text
          style={{
            width: 100,
            textAlign: "left",
          }}
        >
          {item.count}
        </Text>
      </View>
    );
  };
  return (
    <Drawer open={props.visible} title="站点管理" onClose={() => props.close()}>
      <PDFViewer
        className=" fixed right-0 top-0  z-40"
        style={{
          width: "50vw",
          height: "100vh",
        }}
      >
        <Document
          title={dayjs(Date.now()).format("YYYY年MM月DD日") + "质量报告"}
        >
          <Page size="A4" style={pdfStyles.page}>
            <View style={pdfStyles.section}>
              <Text style={pdfStyles.title}>
                {dayjs(Date.now()).format("YYYY年MM月DD日") + "质量报告"}
              </Text>
              <View>
                <Text style={pdfStyles.subtitle}> 运行时错误</Text>
                <View style={{ margin: "5px 10px", border: "1px solid #eee" }}>
                  <PDFList
                    data={props.data.jsError}
                    head={() => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 12,
                          padding: 5,
                          backgroundColor: "#eee",
                        }}
                      >
                        <Text style={{ flex: 1 }}>报错信息</Text>
                        <Text
                          style={{
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          发生次数
                        </Text>
                      </View>
                    )}
                    render={renderListItem}
                  />
                </View>
              </View>
              <View>
                <Text style={pdfStyles.subtitle}> 网络接口错误</Text>
                <View style={{ margin: "5px 10px", border: "1px solid #eee" }}>
                  <PDFList
                    data={props.data.httpError}
                    head={() => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 12,
                          padding: 5,
                          backgroundColor: "#eee",
                        }}
                      >
                        <Text style={{ flex: 1 }}>错误API地址</Text>
                        <Text
                          style={{
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          发生次数
                        </Text>
                      </View>
                    )}
                    render={renderListItem}
                  />
                </View>
              </View>
              <View>
                <Text style={pdfStyles.subtitle}> 静态资源错误</Text>
                <View style={{ margin: "5px 10px", border: "1px solid #eee" }}>
                  <PDFList
                    data={props.data.resourceError}
                    head={() => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 12,
                          padding: 5,
                          backgroundColor: "#eee",
                        }}
                      >
                        <Text style={{ flex: 1 }}>资源地址</Text>
                        <Text
                          style={{
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          发生次数
                        </Text>
                      </View>
                    )}
                    render={renderListItem}
                  />
                </View>
              </View>
              <View>
                <Text style={pdfStyles.subtitle}> 页面崩溃</Text>
                <View style={{ margin: "5px 10px", border: "1px solid #eee" }}>
                  <PDFList
                    data={props.data.crashError}
                    head={() => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 12,
                          padding: 5,
                          backgroundColor: "#eee",
                        }}
                      >
                        <Text style={{ flex: 1 }}>崩溃网页地址</Text>
                        <Text
                          style={{
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          发生次数
                        </Text>
                      </View>
                    )}
                    render={renderListItem}
                  />
                </View>
              </View>
              <View>
                <Text style={pdfStyles.subtitle}> 性能数据</Text>
                <PDFTable {...(props?.data?.webvital || {})}></PDFTable>
              </View>
              <View>
                <Text style={pdfStyles.subtitle}>告警情况</Text>
                <View style={{ margin: "5px 10px", border: "1px solid #eee" }}>
                  <PDFList
                    data={props.data.alarmReport}
                    head={() => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 12,
                          padding: 5,
                          backgroundColor: "#eee",
                        }}
                      >
                        <Text style={{ flex: 1 }}>告警名称</Text>
                        <Text
                          style={{
                            width: 100,
                            textAlign: "left",
                          }}
                        >
                          告警次数
                        </Text>
                      </View>
                    )}
                    render={renderListItem}
                  />
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Drawer>
  );
}
export default PDFDrawer;
