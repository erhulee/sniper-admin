import { Drawer } from "antd";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer, Font } from "@react-pdf/renderer";
import NotoSansSCFont from "../../../assets/font/NotoSansSC-Regular.otf";
import dayjs from "dayjs";
import { PDFList, PDFTable } from "@/components/pdf-components";
Font.register({
  family: "NotoSansSC",
  fonts: [
    {
      src: NotoSansSCFont,
    },
    {
      src: NotoSansSCFont,
      fontWeight: "Bold",
    },
  ],
});
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    fontFamily: "NotoSansSC",
  },
  title: {
    fontSize: 20,
    flex: 0,
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
  const renderListHead = (contents: string[]) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 12,
        padding: 5,
        backgroundColor: "#eee",
      }}
    >
      {contents.map((item, index, array) => (
        <Text
          style={
            index == array.length - 1
              ? {
                  width: 100,
                  textAlign: "left",
                }
              : { flex: 1 }
          }
        >
          {item}
        </Text>
      ))}
    </View>
  );
  const pdfTitle = dayjs(Date.now()).format("YYYY年MM月DD日") + "质量报告";
  const pdfListRenders = [
    {
      title: "运行时错误",
      path: "jsError",
      listHead: ["报错信息", "发生次数"],
    },
    {
      title: "网络接口错误",
      path: "httpError",
      listHead: ["错误API地址", "发生次数"],
    },
    {
      title: "静态资源错误",
      path: "resourceError",
      listHead: ["资源地址", "发生次数"],
    },
    {
      title: "页面崩溃",
      path: "crashError",
      listHead: ["崩溃网页地址", "发生次数"],
    },
    {
      title: "告警情况",
      path: "alarmReport",
      listHead: ["告警名称", "发生次数"],
    },
  ];
  return (
    <Drawer open={props.visible} title="站点管理" onClose={() => props.close()}>
      <PDFViewer
        className=" fixed right-0 top-0  z-40"
        style={{
          width: "50vw",
          height: "100vh",
        }}
      >
        <Document title={pdfTitle}>
          <Page size="A4" style={pdfStyles.page}>
            <View style={pdfStyles.section}>
              <Text style={pdfStyles.title}>{pdfTitle}</Text>
              {/* 展示一些数据 */}
              {pdfListRenders.map(({ title, path, listHead }) => (
                <View>
                  <Text style={pdfStyles.subtitle}>{title}</Text>
                  <View
                    style={{ margin: "5px 10px", border: "1px solid #eee" }}
                  >
                    <PDFList
                      data={props.data[path]}
                      head={() => renderListHead(listHead)}
                      render={renderListItem}
                    />
                  </View>
                </View>
              ))}

              <View>
                <Text style={pdfStyles.subtitle}> 性能数据</Text>
                <PDFTable {...(props?.data?.webvital || {})}></PDFTable>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Drawer>
  );
}
export default PDFDrawer;
export function getWebVitalTableData(data: Array<any>) {
  const keysOrder = ["TTFB", "CLS", "FID", "LCP", "FCP"];
  const colKeys = ["good", "needs-improvement", "bad"];
  const tableData = new Array(colKeys.length)
    .fill(0)
    .map(() => new Array(keysOrder.length).fill(0));

  data.forEach(({ category, path_performance }) => {
    const colIndex = keysOrder.indexOf(category);
    path_performance.forEach((item: any) => {
      const { partition } = item;
      colKeys.forEach((key, index) => {
        const count = partition[key];
        tableData[index][colIndex] += count;
      });
    });
  });
  return {
    rowHead: keysOrder,
    colHead: ["良好", "一般", "差劲"],
    data: tableData,
  };
}
export function getJSErrorReport(
  data: Array<{
    message: string;
    loggers: Array<{ count: number }>;
  }>
) {
  return data.map((item) => {
    return {
      message: item.message,
      count: item.loggers.reduce((pre, cur) => pre + cur.count, 0),
    };
  });
}
export function getHTTPErrorReport(
  data: Array<{
    url: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.url,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
export function getCrashReport(
  data: Array<{
    path: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.path,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
export function getResourceReport(
  data: Array<{
    src: string;
    trend: Array<{ count: number }>;
  }>
) {
  return data.map((item) => ({
    message: item.src,
    count: item.trend.reduce((pre, cur) => pre + cur.count, 0),
  }));
}
export function getAlarmReport(
  data: Array<{
    buzzerid: string;
    buzzerName: string;
  }>
) {
  return data
    .reduce(
      (
        pre: Array<{ buzzerid: string; buzzerName: string; count: number }>,
        cur
      ) => {
        const data = pre.find((item) => item.buzzerid == cur.buzzerid);
        if (data == null) {
          pre.push({
            buzzerid: cur.buzzerid,
            buzzerName: cur.buzzerName,
            count: 0,
          });
          return pre;
        } else {
          data.count++;
          return pre;
        }
      },
      []
    )
    .map((item) => ({
      message: item.buzzerName,
      count: item.count,
    }));
}
