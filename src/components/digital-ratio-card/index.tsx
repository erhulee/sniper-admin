import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { CoreData } from './type'
type Props = CoreData
function formatFloat(value: number) {
  return (value * 100).toFixed(2) + '%'
}
function DigitalRatioCard(props: Props) {
  const { title, value, des, ratio, trend } = props

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" text-gray-600 text-sm">{title}</div>
      <div className="font-semibold text-2xl">{value}</div>
      <div
        className={`flex items-center ${
          trend == 'less' ? ' text-green-600 ' : ' text-red-600'
        }`}
      >
        <span className=" text-gray-400 mr-2">{des}</span>
        <span>{formatFloat(ratio)}</span>
        <span>
          {trend == 'less' ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
        </span>
      </div>
    </div>
  )
}

export default DigitalRatioCard
