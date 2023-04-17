import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { register } from "../../api/login";
import styles from "./index.module.scss";
export default function RegisterForm(props: { goLogin: () => void }) {
  const [form] = Form.useForm();

  const registerMutation = useMutation({
    mutationFn: async () => {
      try {
        await form.validateFields();
        const username = form.getFieldValue("username");
        const password = form.getFieldValue("password");
        const password_confirm = form.getFieldValue("password_confirm");
        return register(username, password, password_confirm);
      } catch (e) {
        throw e;
      }
    },
    onSuccess: () => {
      props.goLogin();
      form.resetFields();
    },
  });

  return (
    <div className="max-w-sm w-3/4">
      <Form labelCol={{ span: 6 }} labelAlign="left" form={form}>
        <Form.Item
          label="账号"
          name="username"
          required
          rules={[
            {
              required: true,
              message: "请输入账号",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          required
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="password_confirm"
          required
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("两次密码不一致");
              },
            }),
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <div className={styles.btnGroup}>
            <Button
              type="primary"
              className={styles.btn}
              htmlType="submit"
              onClick={() => registerMutation.mutate()}
            >
              注册
            </Button>
            <Button onClick={() => props.goLogin()}> 返回</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
