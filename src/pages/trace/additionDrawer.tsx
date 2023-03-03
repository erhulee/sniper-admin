import { Button, Card, Drawer, Form, Input, Select } from 'antd'
import { ModalStatus, TraceInfo, TraceType } from './type'
// import { useForm } from "antd/es/form/Form";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { addTrace } from '../../api/trace'
import { cloneDeep } from 'lodash-es'
const TypeEnumMap = {
  [TraceType.Business]: '业务埋点',
  [TraceType.Performance]: '性能埋点'
}
const Item = Form.Item
const useForm = Form.useForm

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 5 }
  }
}

export default function AdditionDrawer(props: {
  visible: boolean
  close: () => void
  refresh: () => void
  status: null | TraceInfo
}) {
  const { status, close, refresh } = props
  const [form] = useForm()

  console.log('status:', status)
  if (status !== null) {
    const value = cloneDeep(status)
    delete value._id
    delete value.uid
    form.setFieldsValue(value)
  }

  const handleSubmit = () => {
    addTrace(form.getFieldsValue())
    form.resetFields()
    close()
    refresh()
  }
  const handleClose = () => {
    if (status !== null) {
      // form.resetFields()
      form.setFieldsValue({})
    }
    close()
  }
  const handleChange = (index: number, value: string) => {
    const formValue = form.getFieldValue('properties')
    formValue[index] = value
    form.setFieldValue('properties', formValue)
  }

  return (
    <Drawer onClose={handleClose} open={props.visible} title="添加埋点">
      <Form form={form} labelAlign="left" labelCol={{ span: 5 }}>
        <Item label="埋点名称" name="name">
          <Input></Input>
        </Item>
        <Item label="埋点描述" name="des">
          <Input></Input>
        </Item>
        <Item label="埋点类型" name="type">
          <Select>
            <Select.Option value={TraceType.Business}>
              {TypeEnumMap[TraceType.Business]}
            </Select.Option>
            <Select.Option value={TraceType.Performance}>
              {TypeEnumMap[TraceType.Performance]}
            </Select.Option>
          </Select>
        </Item>
        <Form.List name="properties">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Item
                  key={index}
                  label={index === 0 ? '相关属性' : ''}
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                >
                  <div className=" flex">
                    {/* <Item> */}
                    <Input
                      placeholder="请输入属性名"
                      className=" mr-4"
                      onChange={(e) => {
                        console.log(e)
                        handleChange(index, e.target.value)
                      }}
                    />
                    {/* </Item> */}
                    {fields.length > 1 && (
                      <MinusOutlined
                        className=" cursor-pointer text-red-700 hover:text-red-400"
                        onClick={() => remove(index)}
                      />
                    )}
                  </div>
                </Item>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  className=" w-full"
                  //   style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  添加属性
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Item>
          <Button type="primary" className=" w-full" onClick={handleSubmit}>
            保存
          </Button>
        </Item>
      </Form>
    </Drawer>
  )
}
