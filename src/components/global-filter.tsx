import useBreadcrumb from "@/hooks/useBreadcrumb";
import { globalFilterStore } from "@/store";
import { DatePicker, Breadcrumb } from "antd";
import { useSnapshot } from "valtio";
const RangePicker = DatePicker.RangePicker;
function GlobalFilter() {
  const globalFilterSnap = useSnapshot(globalFilterStore);
  const breadcrumb = useBreadcrumb();

  return (
    <div>
      <div className=" flex my-4 justify-between items-center">
        <RangePicker
          size="small"
          placement="bottomLeft"
          className="h-10"
          placeholder={["开始时间", "结束时间"]}
          value={[globalFilterSnap.startDate, globalFilterSnap.endDate]}
          onChange={(value) => {
            if (value && value[0] && value[1]) {
              globalFilterStore.startDate = value[0];
              globalFilterStore.endDate = value[1];
            }
          }}
        />

        <Breadcrumb style={{ margin: "16px 0" }}>
          {breadcrumb.map((i) => (
            <Breadcrumb.Item key={i}>{i}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    </div>
  );
}

export default GlobalFilter;