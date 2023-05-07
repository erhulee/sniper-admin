import { Impact, Trend } from "@/api/types/behavior";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { CoreData } from "./type";
type Props = CoreData;
function formatValue(value: string | number) {
  if (typeof value == "string") return value;
  else {
    const intPart = Math.floor(value);
    const floatPart = value - intPart;
    const formatIntArr = [...String(value)]
      .reverse()
      .reduce<String[]>((pre, cur, index) => {
        pre.push(cur);
        if ((index + 1) % 3 == 0) {
          pre.push(",");
        }
        return pre;
      }, [])
      .reverse();
    if (formatIntArr[0] == ",") formatIntArr.shift();
    const formatInt = formatIntArr.join("");

    if (floatPart == 0) return formatInt;
    return formatInt + floatPart;
  }
}
function DigitalRatioCard(props: Props) {
  const { title, value, des, ratio, trend, impact } = props;
  function getColor() {
    if (impact == Impact.Negative) {
      return trend == Trend.More ? " text-red-600" : "text-green-600 ";
    } else {
      return trend == Trend.More ? " text-green-600 " : " text-red-600";
    }
  }
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" text-gray-600 text-sm">{title}</div>
      <div
        className="font-semibold text-3xl"
        style={{
          fontFamily: "BabasNeue",
        }}
      >
        {formatValue(value)}
      </div>
      <div className={`flex items-center ${getColor()} `}>
        <span className=" text-gray-400 mr-2 ">{des}</span>
        <span className="font-semibold text-base">{ratio}</span>
        <span>
          {trend == Trend.More ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        </span>
      </div>
    </div>
  );
}

export default DigitalRatioCard;
