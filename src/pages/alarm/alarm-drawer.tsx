import { addBuzzer, SupportRuleName } from "@/api/alaram";
const conditionOptions = [
  {
    label: "错误异常",
    options: [
      { label: "JS错误", value: SupportRuleName.JS_ERROR },
      { label: "资源错误", value: SupportRuleName.RESOURCE_ERROR },
    ],
  },
  {
    label: "性能异常",
    options: [
      { label: "FCP", value: SupportRuleName.FCP },
      { label: "TTFB", value: SupportRuleName.TTFB },
      { label: "CLS", value: SupportRuleName.CLS },
      { label: "FID", value: SupportRuleName.FID },
      { label: "LCP", value: SupportRuleName.LCP },
    ],
  },
];

const operator = [
  {
    label: ">",
    value: AlarmOperator.bg,
  },
  {
    label: "=",
    value: AlarmOperator.eq,
  },
  {
    label: "<",
    value: AlarmOperator.ls,
  },
];

import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { AlarmOperator } from "../types";
const Item = Form.Item;
const useForm = Form.useForm;
type Props = {
  visible: boolean;
  close: () => void;
};

function AlarmDrawer(props: Props) {
  const [form] = useForm();
  const handleSave = async () => {
    await addBuzzer(form.getFieldsValue());
    form.resetFields();
    close();
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
          <Item label="飞书WebHook">
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
