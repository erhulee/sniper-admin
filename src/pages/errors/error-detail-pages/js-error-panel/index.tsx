import { Button, Divider, List, TimePicker } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { Column } from '@ant-design/charts'
import { bar } from '../../fakeData'
import MacIcon from '../../../../assets/icons/MacIcon'
import WindowsIcon from '../../../../assets/icons/WindowsIcon'
import DigitalCard from '../../../../components/digital-card'
import TimeFilter from '../../../../components/time-filter'
import ErrorPathList from './components/error-path-list'
function Title() {
  return (
    <div className="flex justify-between">
      <div>
        <div className=" text-indigo-900 font-semibold">
          UncaughtInPromiseError
        </div>
        <div className=" flex mt-1 items-center">
          <div className=" text-gray-600 text-sm">error is not defined</div>
          <Divider type="vertical"></Divider>
          <div className=" text-sm">2023-01-02 17:59:15 </div>
        </div>

        <div className="mt-2">
          <Button style={{ marginRight: '10px' }} type="primary">
            解决
          </Button>
          <Button style={{ marginRight: '10px' }}>忽略</Button>
          <Button
            type="link"
            className=" text-indigo-400 hover:text-indigo-300"
          >
            查看录屏
          </Button>
        </div>
      </div>

      <div>
        <Button
          icon={<LeftOutlined />}
          type="primary"
          className="mr-1"
        ></Button>
        <Button icon={<RightOutlined />} type="primary"></Button>
      </div>
    </div>
  )
}

function EnvCard() {
  return (
    <div className="mt-7">
      <div className="font-semibold text-indigo-900">UserAgent</div>
      <div className="mt-4 font-medium text-sm ">
        Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36
        (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36
      </div>
    </div>
  )
}

//TODO hightlight.js
function ErrorStack() {
  return (
    <div className="mt-7">
      <div className="font-semibold text-indigo-900">错误堆栈</div>
      <div className="mt-4 font-medium text-sm ">
        ReferenceError: a is not defined at onClick (index.tsx:27:35) at
        handleClick2 (button.js:184:55) at HTMLUnknownElement.callCallback2
        (react-dom.development.js:4164:14) at Object.invokeGuardedCallbackDev
        (react-dom.development.js:4213:16) at invokeGuardedCallback
        (react-dom.development.js:4277:31) at
        invokeGuardedCallbackAndCatchFirstError
        (react-dom.development.js:4291:25) at executeDispatch
        (react-dom.development.js:9041:3) at processDispatchQueueItemsInOrder
        (react-dom.development.js:9073:7) at processDispatchQueue
        (react-dom.development.js:9086:5) at dispatchEventsForPlugins
        (react-dom.development.js:9097:3)
      </div>
      <div className=" my-4 text-indigo-900"> 反解后错误堆栈</div>
      <div className="font-medium text-sm">
        ReferenceError: a is not defined at onClick (index.tsx:27:35) at
        handleClick2 (button.js:184:55) at HTMLUnknownElement.callCallback2
        (react-dom.development.js:4164:14) at Object.invokeGuardedCallbackDev
        (react-dom.development.js:4213:16) at invokeGuardedCallback
        (react-dom.development.js:4277:31) at
        invokeGuardedCallbackAndCatchFirstError
        (react-dom.development.js:4291:25) at executeDispatch
        (react-dom.development.js:9041:3) at processDispatchQueueItemsInOrder
        (react-dom.development.js:9073:7) at processDispatchQueue
        (react-dom.development.js:9086:5) at dispatchEventsForPlugins
        (react-dom.development.js:9097:3)
      </div>
    </div>
  )
}

function BarChart() {
  const config = {
    data: bar,
    xField: '城市',
    yField: '销售额',
    xAxis: {
      label: {
        autoRotate: false
      }
    },
    slider: {
      start: 0.1,
      end: 0.2
    },
    // autoFit: true,
    width: 100
  }
  return <Column {...config} />
}
function JsErrorPanel() {
  const errorList: any[] = []
  return (
    <div className="flex ">
      <div
        style={{ flexGrow: '3', flexBasis: '1' }}
        className="flex-1 border-r-primary-100 border-solid border-r-1 border-y-0 border-l-0  pr-5 "
      >
        <Title></Title>
        <EnvCard></EnvCard>
        <ErrorStack></ErrorStack>
      </div>

      <div style={{ flexGrow: '2', flexBasis: '1' }} className="ml-5 flex-1">
        <div className=" font-semibold">总体概览</div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <DigitalCard
            value={1000}
            direction="horizontal"
            unit="次"
            specific="发生总次数"
            className=" bg-indigo-50 p-4 rounded-lg"
          />
          <DigitalCard
            value={1000}
            direction="horizontal"
            unit="人"
            specific="影响人数"
            className=" bg-indigo-50 p-4 rounded-lg"
          />
        </div>

        <div className="flex justify-around items-center p-4 bg-primary-100 mt-5 rounded-lg ">
          <div className="text-xl flex items-center text-primary">
            <WindowsIcon />
            <span className="ml-2">200</span>
          </div>
          <div className="text-xl flex items-center text-primary">
            <MacIcon />
            <span className="ml-2">200</span>
          </div>
        </div>

        <div>
          <TimeFilter className="my-5"></TimeFilter>
          <BarChart></BarChart>
          <ErrorPathList></ErrorPathList>
        </div>
      </div>
    </div>
  )
}
export default JsErrorPanel
