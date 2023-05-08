import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { login } from "../../api/login";
import { userStore } from "../../store";
import styles from "./index.module.scss";

export default function LoginForm(props: {
  goRegister: () => void;
  goReset: () => void;
}) {
  const [form] = Form.useForm();
  const loginMutation = useMutation({
    mutationFn: () => {
      const { username, password } = form.getFieldsValue();
      return login(username, password);
    },
    onSuccess: (data) => {
      const { user, token, expire } = data;
      const userid = user._id;
      userStore.userid = userid;
      userStore.token = token;
      userStore.userAccount = user.username;
      userStore.expire = expire;
    },
  });

  return (
    <div className=" max-w-sm w-3/4">
      <Form form={form}>
        <Form.Item label="账号" name="username" initialValue={"admin"}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password" initialValue={"1234"}>
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item>
          <div className={styles.btnGroup}>
            <Button
              loading={loginMutation.isLoading}
              type="primary"
              className={styles.btn}
              onClick={() => {
                loginMutation.mutate();
              }}
            >
              登录
            </Button>
            <Button className={styles.btn} onClick={() => props.goRegister()}>
              注册
            </Button>
          </div>
        </Form.Item>
        <div className={styles.forget} onClick={props.goReset}>
          忘记密码
        </div>
      </Form>
    </div>
  );
}
