import { Button, DatePicker, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, register } from '../../api/login'
import { userStore } from '../../store'

import styles from './index.module.scss'
function RegisterForm(props: { goLogin: () => void }) {
  const [form] = Form.useForm()
  const handleSubmit = async () => {
    try {
      await form.validateFields()
      const username = form.getFieldValue('account')
      const password = form.getFieldValue('password1')
      const response = await register(username, password)
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
          name="account"
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
          name="password1"
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
          name="password2"
          required
          dependencies={['password1']}
          // hasFeedback
          rules={[
            {
              required: true,
              message: '请输入密码'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password1') === value) {
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
function LoginForm(props: { goRegister: () => void }) {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const userInfo = userStore
  const handleSubmit = async () => {
    const username = form.getFieldValue('username')
    const password = form.getFieldValue('password')
    try {
      const result = await login(username, password)
      const userid = result.user._id
      userInfo.userid = userid
      userInfo.token = result.access_token
      // debugger;
      navigate('/dashboard')
    } catch {}
  }
  return (
    <div className={styles.form}>
      <Form form={form}>
        <Form.Item label="账号" name="username" initialValue={'sider'}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password" initialValue={'123'}>
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <div className={styles.btnGroup}>
            <Button
              type="primary"
              className={styles.btn}
              onClick={() => handleSubmit()}
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
  )
}
export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className={styles.page}>
      {isLogin ? (
        <LoginForm goRegister={() => setIsLogin(false)}></LoginForm>
      ) : (
        <RegisterForm goLogin={() => setIsLogin(true)}></RegisterForm>
      )}
    </div>
  )
}
