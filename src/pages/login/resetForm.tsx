import IntervalDisableButton from "@/components/interval-disable-button";
import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { getCheckCode, reset } from "../../api/login";
import styles from "./index.module.scss";
export default function ResetForm(props: { goLogin: () => void }) {
  const [form] = Form.useForm();

  const registerMutation = useMutation({
    mutationFn: async () => {
      try {
        await form.validateFields();
        const password = form.getFieldValue("password");
        const password_confirm = form.getFieldValue("password_confirm");
        const email = form.getFieldValue("email");
        const checkCode = form.getFieldValue("code");
        return reset(password, password_confirm, email, checkCode);
      } catch (e) {
        throw e;
      }
    },
    onSuccess: () => {
      props.goLogin();
      form.resetFields();
    },
  });

  const handleCheckCode = async () => {
    const email = form.getFieldValue("email");
    await getCheckCode(email);
  };
  return (
    <div className="max-w-sm w-3/4">
      <Form labelCol={{ span: 6 }} labelAlign="left" form={form}>
        <Form.Item
          label="邮箱"
          name="email"
          required
          rules={[
            {
              required: true,
              message: "请输入邮箱",
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
          <Input.Password></Input.Password>
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
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item label="验证码" required>
          <div className=" flex-row flex">
            <Form.Item
              className="mr-4"
              name="code"
              rules={[
                {
                  required: true,
                  message: "请输入验证码",
                },
              ]}
            >
              <Input className="mr-4"></Input>
            </Form.Item>
            <IntervalDisableButton
              id="reset_check_code"
              interval={60 * 1000}
              onClick={() => {
                handleCheckCode();
              }}
            >
              获取验证码
            </IntervalDisableButton>
          </div>
        </Form.Item>
        <Form.Item>
          <div className={styles.btnGroup}>
            <Button
              type="primary"
              className={styles.btn}
              htmlType="submit"
              onClick={() => registerMutation.mutate()}
            >
              重置
            </Button>
            <Button onClick={() => props.goLogin()}> 返回</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
