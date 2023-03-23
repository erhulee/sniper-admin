import ErrorChart from './error-chart'
import { Select, Table, TimePicker, DatePicker } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import styles from './index.module.scss'
import ErrorListTable from './error-list-table'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getJSErrorInfo } from '../../api/error'
import dayjs from 'dayjs'
const RangePicker = DatePicker.RangePicker
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

function Errors() {
  const [timeRange, setTimeRange] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs(Date.now()),
    dayjs(Date.now())
  ])
  const queryClient = useQueryClient()
  const query = useQuery({
    queryKey: ['posts', timeRange],
    queryFn: () =>
      getJSErrorInfo(timeRange[0].valueOf(), timeRange[1].valueOf()),
    select: () => {}
  })
  const { data, isLoading, isError, refetch } = query
  console.log('dddd', data, timeRange[0], timeRange[1])
  return (
    <div className={styles.page}>
      <div className={styles.filter}>
        <RangePicker
          placeholder={['开始时间', '结束时间']}
          value={timeRange}
          onChange={(value) => {
            setTimeRange(value as any)
            // createTimeLine(value[0]?.valueOf(), value[1]?.valueOf())
            // console.log(
            //   "!@#",
            //

            // )
            // refetch();
          }}
        />
        {/* <Select
          options={options}
          placeholder="时间粒度"
          style={{ marginLeft: '10px' }}
        /> */}
      </div>
      <ErrorChart></ErrorChart>
      <ErrorListTable></ErrorListTable>
    </div>
  )
}

export default Errors
