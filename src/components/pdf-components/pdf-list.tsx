import { View } from "@react-pdf/renderer";

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

export default PDFList;
