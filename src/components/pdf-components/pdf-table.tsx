import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
const cellStyle: Style = {
  flex: 1,
  textAlign: "center",
};
const rowStyle: Style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  fontSize: 14,
};
function PDFTable(props: {
  rowHead: string[];
  colHead: string[];
  data: (string | number)[][];
}) {
  function createCell(content: string | number) {
    return <Text style={cellStyle}>{content}</Text>;
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
          ...rowStyle,
          backgroundColor: "#eee",
        }}
      >
        {createCell("")}
        {rowHead.map((content) => createCell(content))}
      </View>
      {data.map((rowData, index) => {
        return (
          <View style={rowStyle}>
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

export default PDFTable;
