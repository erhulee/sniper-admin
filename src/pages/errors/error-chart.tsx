import { Area } from '@ant-design/charts'
import { data } from './fakeData'

function ErrorChart() {
  const config = {
    data: data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    slider: {
      start: 0.1,
      end: 0.9
    }
  }
  return <Area {...config}></Area>
}
export default ErrorChart
