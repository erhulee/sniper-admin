import { Button, DatePicker, Form, Input } from "antd"

import styles from "./index.module.scss"

function LoginForm(){
    const [form] = Form.useForm();
    return (
        <div className={styles.form} >
            <Form>
                <Form.Item label="账号" >
                    <Input></Input>
                </Form.Item>
                <Form.Item label="密码" >
                    <Input></Input>
                </Form.Item>
                <Form.Item >
                    <div className={styles.btnGroup}>
                        <Button type="primary" className={styles.btn}  >登录</Button>
                        <Button className={styles.btn}  > 注册</Button>
                    </div>
                </Form.Item>
                <div className={styles.forget} >忘记密码</div>
            </Form>
        </div>
    )

}
export default function Login(){
    return (
        <div className={styles.page} >
           <LoginForm></LoginForm>
        </div>
    )
}