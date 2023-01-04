import { Button, Checkbox, List, Table } from 'antd'
import useModal from '../../hooks/useModal'
import BarChart from './bar-chart'
import { AlarmOprator, AlarmRule, Buzzer } from '../types'
import AlarmDrager from './alarm-drawer'
type AlarmData = {
  name: string
  rule: AlarmRule
}

function formatRule(rule: AlarmRule) {
  const map = {
    [AlarmOprator.bg]: '>',
    [AlarmOprator.eq]: '=',
    [AlarmOprator.ls]: '<'
  }
  return `${rule.name}${map[rule.oprator]}${rule.value}`
}
function AlarmItem(props: AlarmData) {
  return (
    <div className=" p-2">
      <div className=" flex justify-between items-center">
        <span className=" text-primary-900"> {props.name}</span>
        {/* <Checkbox></Checkbox> */}
      </div>
      <div className=" text-gray-500 text-sm">{formatRule(props.rule)}</div>
    </div>
  )
}
function AlarmList() {
  const data: AlarmData[] = [
    {
      name: '重要的JS错误',
      rule: {
        name: 'CC',
        oprator: AlarmOprator.eq,
        value: 200
      }
    },
    {
      name: '重要的JS错误',
      rule: {
        name: 'CC',
        oprator: AlarmOprator.eq,
        value: 200
      }
    }
  ]
  return (
    <div className="">
      <div className=" flex items-center justify-between mb-4 ">
        <div className=" text-primary-900 font-semibold text-base">
          今日告警
        </div>
        <Button type="primary">添加</Button>
      </div>

      <List
        dataSource={data}
        renderItem={(item) => <AlarmItem {...item}></AlarmItem>}
      ></List>
    </div>
  )
}

function AlarmChart() {
  return (
    <div className="  px-7 ">
      <div className=" mb-4 text-xl  font-semibold ">告警个数总览(天)</div>
      <BarChart></BarChart>
    </div>
  )
}

function BuzzerList() {
  const data: Buzzer[] = [
    {
      bid: '1',
      title: '新上页面',
      rule: {
        name: 'JS ERROR',
        oprator: AlarmOprator.bg,
        value: 20
      },
      createdTime: {
        raw_date: new Date(),
        formate: '2020-03-01'
      }
    },
    {
      bid: '2',
      title: '新上页面',
      rule: {
        name: 'JS ERROR',
        oprator: AlarmOprator.bg,
        value: 20
      },
      createdTime: {
        raw_date: new Date(),
        formate: '2020-03-01'
      }
    }
  ]

  return (
    <div className=" mt-4 bg-primary-20 ">
      <div className=" flex justify-end bg-primary-100 p-2 pr-4 ">
        <Button size="small" type="primary" className=" mr-2">
          添加
        </Button>
        <Button
          size="small"
          className=" bg-red-500 text-white hover:bg-red-400 "
        >
          删除
        </Button>
      </div>

      {/* <List dataSource={data} renderItem={renderItem} className=" p-2"  /> */}
      <Table
        dataSource={data}
        rowSelection={{
          type: 'checkbox'
        }}
        columns={[
          {
            dataIndex: 'title',
            title: '名称',
            key: 'title'
          },
          {
            dataIndex: 'rule',
            key: 'rule',
            title: '规则',
            render: (item) => <span>{formatRule(item)}</span>
          },
          {
            key: 'createdTime',
            dataIndex: 'createdTime',
            title: '创建时间',
            render: (item) => <span>{item.formate}</span>
          },
          {
            dataIndex: '',
            // align:"right",
            width: 2,
            render: () => (
              <div className=" flex">
                <Button size="small" type="primary" className="mr-2">
                  编辑
                </Button>
                <Button
                  size="small"
                  className=" hover:bg-red-400 bg-red-500 text-white "
                >
                  删除
                </Button>
              </div>
            )
          }
        ]}
      ></Table>
    </div>
  )
}
function Alarm() {
  const [visible, open, close] = useModal()
  return (
    <div>
      <AlarmDrager visible={visible} close={close}></AlarmDrager>
      <div className=" flex justify-between  ">
        <div className=" mr-8 flex-auto ">
          <AlarmChart></AlarmChart>
          <BuzzerList></BuzzerList>
        </div>
        <div
          className="p-5 border border-solid border-primary-100 bg-slate-50 flex-1 "
          style={{ minWidth: '300px' }}
        >
          <AlarmList></AlarmList>
        </div>
      </div>
    </div>
  )
}

export default Alarm
