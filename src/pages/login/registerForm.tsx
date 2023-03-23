import { Button, Form, Input } from 'antd'
import { register } from '../../api/login'

import styles from './index.module.scss'
export default function RegisterForm(props: { goLogin: () => void }) {
  const [form] = Form.useForm()
  const handleSubmit = async () => {
    try {
      await form.validateFields()
      const username = form.getFieldValue('username')
      const password = form.getFieldValue('password')
      const password_confirm = form.getFieldValue('password_confirm')

      const response = await register(username, password, password_confirm)
      form.resetFields()
      props.goLogin()
    } catch (e) {
      console.log('e', e)
    }
  }
  return (
    <div className={styles.form}>
      <Form labelCol={{ span: 6 }} labelAlign="left" form={form}>
        <Form.Item
          label="账号"
          name="username"
          required
          rules={[
            {
              required: true,
              message: '请输入账号'
            }
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
              message: '请输入密码'
            }
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="password_confirm"
          required
          dependencies={['password']}
          // hasFeedback
          rules={[
            {
              required: true,
              message: '请输入密码'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password_confirm') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次密码不一致'))
              }
            })
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
              onClick={() => handleSubmit()}
            >
              注册
            </Button>
            <Button onClick={() => props.goLogin()}> 返回</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}
