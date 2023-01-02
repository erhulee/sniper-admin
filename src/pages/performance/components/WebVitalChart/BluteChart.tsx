import { PropsWithClassName } from '@/utils/type'

type BluteChartProps = {
  data: {
    good: number
    normal: number
    bad: number
  }
}

function BluteChart(props: PropsWithClassName<BluteChartProps>) {
  const { good, normal, bad } = props.data
  return (
    <div className={`${props.className} flex flex-row  `}>
      <div
        style={{
          backgroundColor: '#2BA185',
          flex: 1,
          flexGrow: good
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#F5B000',
          flex: 1,
          flexGrow: normal
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#F55459',
          flex: 1,
          flexGrow: bad
        }}
      ></div>
    </div>
  )
}
export default BluteChart
