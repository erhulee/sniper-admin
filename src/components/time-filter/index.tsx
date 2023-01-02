import { Button, Select, TimePicker } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
const RangePicker = TimePicker.RangePicker
const options: DefaultOptionType[] = [
  {
    label: '分钟',
    value: 'minute'
  },
  {
    label: '小时',
    value: 'hour'
  },
  {
    label: '天',
    value: 'day'
  },
  {
    label: '月',
    value: 'month'
  }
]

type Props = {
  className: string
}
function TimeFilter(props: Props) {
  return (
    <div className={`${props.className} flex `}>
      <RangePicker placeholder={['开始时间', '结束时间']} />
      <Select options={options} placeholder="时间粒度" className="ml-3" />
      <Button type="primary" className=" justify-self-end ml-11 self-end ">
        查询
      </Button>
    </div>
  )
}

export default TimeFilter
