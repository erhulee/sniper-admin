import { QuestionCircleOutlined } from '@ant-design/icons'
import BarChart from './Barchart'

type CounterCardProps = {
  title: string
  tooltip: string
  description: string
  barData: any
}
export default function CounterCard(props: CounterCardProps) {
  const { title, tooltip, description, barData } = props
  return (
    <div className="border px-8 py-4 border-gray-light rounded-lg">
      <div className="text-gray-default flex flex-row items-center">
        <span className="font-semibold text-gray-dark mr-4">{title}</span>
        <QuestionCircleOutlined></QuestionCircleOutlined>
      </div>
      <p className="text-gray-dark text-opacity-90 text-sm">{description}</p>

      <div className="mt-4">
        <BarChart></BarChart>
      </div>
    </div>
  )
}
