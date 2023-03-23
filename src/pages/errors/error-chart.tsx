import { Area } from '@ant-design/charts'
import { data } from './fakeData'

function ErrorChart(props: { data: any[] }) {
  const config = {
    data: props.data,
    xField: 'date',
    yField: 'count',
    slider: {
      start: 0.1,
      end: 0.9
    }
  }
  return <Area {...config}></Area>
}
export default ErrorChart
