import { Column } from '@ant-design/plots'
export default function BarChart() {
  const data = [
    {
      time: '1991',
      value: 3
    },
    {
      time: '1992',
      value: 5
    },
    {
      time: '1993',
      value: 6
    },
    {
      time: '1994',
      value: 23
    },
    {
      time: '1995',
      value: 13
    },
    {
      time: '1996',
      value: 3
    }
  ]
  const config = {
    data,
    height: 100,
    isStack: true,
    xField: 'time',
    yField: 'value',
    color: '#C76061',
    label: false
  }
  return <Column {...config} />
}
