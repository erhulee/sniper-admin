import { Button, Form, Input } from "antd";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { userStore } from "../../store";
import styles from "./index.module.scss";

export default function LoginForm(props: { goRegister: () => void }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { refetch, isFetching, data, isSuccess } = useQuery({
    queryKey: ["login"],
    queryFn: () => {
      const { username, password } = form.getFieldsValue();
      return login(username, password);
    },
    enabled: false,
  });

  if (userStore.userid && userStore.token) {
    navigate("/dashboard");
    return null;
  }

  if (isSuccess) {
    const { user, token } = data as any;
    const userid = user._id;
    userStore.userid = userid;
    userStore.token = token;
    navigate("/dashboard");
    return null;
  }

  return (
    <div className={styles.form}>
      <Form form={form}>
        <Form.Item label="账号" name="username" initialValue={"admin"}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password" initialValue={"1234"}>
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <div className={styles.btnGroup}>
            <Button
              loading={isFetching}
              type="primary"
              className={styles.btn}
              onClick={() => {
                refetch();
              }}
            >
              登录
            </Button>
            <Button className={styles.btn} onClick={() => props.goRegister()}>
              注册
            </Button>
          </div>
        </Form.Item>
        <div className={styles.forget}>忘记密码</div>
      </Form>
    </div>
  );
}
