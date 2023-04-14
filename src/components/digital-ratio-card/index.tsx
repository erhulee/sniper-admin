import { Impact, Trend } from "@/api/behavior";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { CoreData } from "./type";
type Props = CoreData;

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
      <div className="font-semibold text-2xl">{value}</div>
      <div className={`flex items-center ${getColor()}`}>
        <span className=" text-gray-400 mr-2">{des}</span>
        <span>{ratio}</span>
        <span>
          {trend == Trend.More ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        </span>
      </div>
    </div>
  );
}

export default DigitalRatioCard;
