import CounterCard from './components/counter-card.tsx'
import WebVitalChart from './components/WebVitalChart'
export default function Performance() {
  const webvitalList = [
    {
      title: 'Worst FID Web Vitals',
      tooltip:
        'First Input Delay: 衡量可交互性。为了提供一个好的用户体验，FID应该在100毫秒内。',
      proportion: {
        good: 1,
        general: 0,
        bad: 0
      },
      data: [
        {
          category: 'good',
          dateTime: 0,
          value: 0
        },
        {
          category: 'general',
          dateTime: 0,
          value: 0
        },
        {
          category: 'bad',
          dateTime: 0,
          value: 0
        }
      ]
    },
    {
      title: 'Worst LCP Web Vitals',
      tooltip:
        'Largest Contentful Paint: 衡量加载性能。为了提供一个好的用户体验，LCP应该在2.5秒内。',
      proportion: {
        good: 1,
        general: 0,
        bad: 0
      },
      data: [
        {
          category: 'good',
          dateTime: 0,
          value: 0
        },
        {
          category: 'general',
          dateTime: 0,
          value: 0
        },
        {
          category: 'bad',
          dateTime: 0,
          value: 0
        }
      ]
    },
    {
      title: 'Worst FCP Web Vitals',
      tooltip:
        'Cumulative Layout Shift: 衡量视觉稳定性。为了提供一个好的用户体验，CLS应该小于0.1。',
      proportion: {
        good: 1,
        general: 0,
        bad: 0
      },
      data: [
        {
          category: 'good',
          dateTime: 0,
          value: 0
        },
        {
          category: 'general',
          dateTime: 0,
          value: 0
        },
        {
          category: 'bad',
          dateTime: 0,
          value: 0
        }
      ]
    }
  ]
  return (
    <div>
      <div className=" grid grid-cols-3 gap-10 mt-8">
        <CounterCard
          title={'LCP 统计'}
          description={'近一周期'}
          tooltip="SAdasd"
          barData={[]}
        ></CounterCard>
        <CounterCard
          title={'LCP 统计'}
          description={'近一周期'}
          tooltip="SAdasd"
          barData={[]}
        ></CounterCard>
        <CounterCard
          title={'LCP 统计'}
          description={'近一周期'}
          tooltip="SAdasd"
          barData={[]}
        ></CounterCard>
      </div>
      <div className=" grid grid-cols-2 mt-10 gap-10">
        {webvitalList.map((webvital) => {
          return (
            <WebVitalChart
              key={webvital.title}
              title={webvital.title}
              tooltip={webvital.tooltip}
              proportion={webvital.proportion}
              trendData={webvital.data}
            ></WebVitalChart>
          )
        })}
      </div>
    </div>
  )
}
