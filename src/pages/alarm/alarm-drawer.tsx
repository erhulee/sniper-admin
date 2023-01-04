import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select
} from 'antd'
import { AlarmOprator } from '../types'
const Item = Form.Item
const useForm = Form.useForm
type Props = {
  visible: boolean
  close: () => void
}
const notifyTypeOptions = [
  {
    value: 'web',
    label: '无'
  },
  {
    value: 'dingding',
    label: '钉钉'
  }
]

const conditionOptions = [
  {
    label: '错误异常',
    options: [{ label: 'JS错误', value: 'js error' }]
  },
  {
    label: '性能异常',
    options: [{ label: 'LCP', value: 'LCP' }]
  }
]

const oprator = [
  {
    label: '>',
    value: AlarmOprator.bg
  },
  {
    label: '=',
    value: AlarmOprator.eq
  },
  {
    label: '<',
    value: AlarmOprator.ls
  }
]
function AlarmDrager(props: Props) {
  const [form] = useForm()
  return (
    <div>
      <Drawer
        open={props.visible}
        onClose={() => props.close()}
        title="设置报警"
      >
        <Form
          form={form}
          labelAlign="left"
          labelCol={{
            span: 6
          }}
        >
          <Item label="名称" name={'name'}>
            <Input></Input>
          </Item>
          <Item label="规则">
            <Row gutter={10}>
              <Col span="10">
                <Item name={['rule', 'name']}>
                  <Select
                    options={conditionOptions}
                    defaultValue={conditionOptions[0].options[0].value}
                  ></Select>
                </Item>
              </Col>
              <Col span="4">
                <Item name={['rule', 'oprator']}>
                  <Select
                    options={oprator}
                    defaultValue={oprator[0].value}
                  ></Select>
                </Item>
              </Col>
              <Col span="8">
                <Item name={['rule', 'value']}>
                  <InputNumber></InputNumber>
                </Item>
              </Col>
            </Row>
          </Item>
          <Item label="通知方式">
            <Select options={notifyTypeOptions}></Select>
          </Item>
          <Item>
            <Button className=" w-full" type="primary">
              保存
            </Button>
          </Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default AlarmDrager
