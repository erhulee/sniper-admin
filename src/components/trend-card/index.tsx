import { Tooltip } from 'antd'
import {
  QuestionCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { Area } from '@ant-design/charts'
import { TrendCardData } from './type'
import dayjs from 'dayjs'
type Props = TrendCardData
function getCurrentDate() {
  return dayjs().format('YYYY/MM/DD')
}
function TrendChart({ data }: { data: any[] }) {
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country'
  }
  return <Area {...config} />
}
function TrendCard(props: Props) {
  const { title, tooltip, trend, ratio, pivot, dataSource } = props
  return (
    <div className=" p-4 bg-slate-50 rounded ">
      <div className=" flex justify-between items-center">
        <div className=" flex items-center">
          <span className=" font-semibold text-base mr-2 ">{title}</span>
          <Tooltip title={tooltip}>
            <QuestionCircleOutlined className=" text-gray-500 " />
          </Tooltip>
        </div>

        <div
          className={`flex text-xl ${
            trend === 'less' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className=" mr-2">{ratio}</span>
          <span>
            {trend == 'less' ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
          </span>
        </div>
      </div>
      <div className=" flex justify-between items-center  ">
        <div className=" text-gray-600">{getCurrentDate()}</div>
        <div className="text-gray-600">{pivot}</div>
      </div>
      <div>
        <TrendChart data={dataSource}></TrendChart>
      </div>
    </div>
  )
}

export default TrendCard
