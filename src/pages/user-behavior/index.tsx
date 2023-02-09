import DigitalRatioCard from '../../components/digital-ratio-card'
import { CoreData } from '../../components/digital-ratio-card/type'
import TrendCard from '../../components/trend-card'
import { TrendCardData } from '../../components/trend-card/type'
import StackBar from './bar-chart'

function UserBehavior() {
  const coreData: CoreData[] = [
    {
      title: '浏览量(PV)',
      value: 210232,
      des: '较昨日',
      ratio: 0.1234,
      trend: 'less'
    },
    {
      title: '访客数(UV)',
      value: 210232,
      des: '较昨日',
      ratio: 0.1234,
      trend: 'less'
    },
    {
      title: '新访客',
      value: 210232,
      des: '较昨日',
      ratio: 0.1234,
      trend: 'less'
    },
    {
      title: '跳出率',
      value: '56.30%',
      des: '较昨日',
      ratio: 0.1234,
      trend: 'more'
    }
  ]

  const trendData: TrendCardData[] = [
    {
      title: '页面访问量趋势',
      tooltip: '用户访问一次页面，增加一个PV数据',
      ratio: '2.31%',
      trend: 'less',
      pivot: '较一周前',
      dataSource: []
    },
    {
      title: '页面访问量趋势',
      tooltip: '用户访问一次页面，增加一个PV数据',
      ratio: '2.31%',
      trend: 'less',
      pivot: '较一周前',
      dataSource: []
    }
  ]
  return (
    <div>
      <div className=" flex justify-around">
        {coreData.map((d) => (
          <DigitalRatioCard {...d}></DigitalRatioCard>
        ))}
      </div>

      <div className=" h-40 my-8">
        <StackBar></StackBar>
      </div>

      <div className=" grid grid-cols-3 gap-4 ">
        {trendData.map((item) => (
          <TrendCard {...item} />
        ))}
      </div>
    </div>
  )
}

export default UserBehavior
