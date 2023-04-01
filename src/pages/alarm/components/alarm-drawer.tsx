import { addBuzzer } from "@/api/alaram";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
} from "antd";
import { conditionOptions, operator } from "../constants";
const Item = Form.Item;
const useForm = Form.useForm;

function AlarmDrawer(props: { visible: boolean; close: () => void }) {
  const [form] = useForm();
  const handleSave = async () => {
    await addBuzzer(form.getFieldsValue());
    form.resetFields();
    props.close();
  };
  return (
    <div>
      <Drawer
        open={props.visible}
        onClose={() => props.close()}
        title="设置报警"
      >
        <Form form={form} labelAlign="left">
          <Item label="名称" name={"name"}>
            <Input></Input>
          </Item>
          <Item label="规则">
            <Row gutter={10}>
              <Col span="10">
                <Item
                  name={["rule", "name"]}
                  initialValue={conditionOptions[0].options[0].value}
                >
                  <Select options={conditionOptions}></Select>
                </Item>
              </Col>
              <Col span="4">
                <Item
                  name={["rule", "operator"]}
                  initialValue={operator[0].value}
                >
                  <Select options={operator}></Select>
                </Item>
              </Col>
              <Col span="8">
                <Item name={["rule", "value"]}>
                  <InputNumber></InputNumber>
                </Item>
              </Col>
            </Row>
          </Item>
          <Item
            label="生效"
            name="status"
            initialValue={true}
            valuePropName="checked"
          >
            <Switch></Switch>
          </Item>
          <Item label="飞书WebHook" name="webhook">
            <Input></Input>
          </Item>
          <Item>
            <Button className=" w-full" type="primary" onClick={handleSave}>
              保存
            </Button>
          </Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default AlarmDrawer;
