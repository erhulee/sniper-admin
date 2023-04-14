import { Button, Drawer, Form, Input, Select } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { addTrace, Trace, TraceType, updateTrace } from "../../api/trace";
import { cloneDeep } from "lodash";
import {
  formItemLayout,
  formItemLayoutWithOutLabel,
  TypeEnumMap,
} from "./constants";

const Item = Form.Item;
const useForm = Form.useForm;

export default function AdditionDrawer(props: {
  visible: boolean;
  close: () => void;
  refresh: () => void;
  status: null | Trace;
}) {
  const { status, close, refresh } = props;
  const [form] = useForm();
  const isEdit = Boolean(status);
  // 如果是编辑态，就初始化表单
  if (isEdit) {
    const value = cloneDeep(status);
    delete value?._id;
    form.setFieldsValue(value);
  }
  const handleSubmit = () => {
    if (status !== null) {
      const data = Object.assign(status, form.getFieldsValue());
      data.id = data._id;
      updateTrace(data);
    } else {
      addTrace(form.getFieldsValue());
      form.resetFields();
    }
    close();
    refresh();
  };
  const handleClose = () => {
    form.resetFields();
    if (status !== null) {
      form.setFieldsValue({});
    }
    close();
  };
  const handleChange = (index: number, value: string) => {
    const formValue = form.getFieldValue("properties");
    formValue[index] = value;
    form.setFieldValue("properties", formValue);
  };

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
              {fields.map((field, index) => {
                return (
                  <Item
                    key={index}
                    label={index === 0 ? "相关属性" : ""}
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                  >
                    <div className=" flex">
                      <Input
                        placeholder="请输入属性名"
                        className=" mr-4"
                        value={form.getFieldValue("properties")[index]}
                        onChange={(e) => {
                          handleChange(index, e.target.value);
                        }}
                      />
                      {fields.length > 1 && (
                        <MinusOutlined
                          className=" cursor-pointer text-red-700 hover:text-red-400"
                          onClick={() => remove(index)}
                        />
                      )}
                    </div>
                  </Item>
                );
              })}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  className=" w-full"
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
  );
}
