import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/login'
import { userStore } from '../../store'
import styles from './index.module.scss'

export default function LoginForm(props: { goRegister: () => void }) {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const userInfo = userStore
  const [formInfo, setFormInfo] = useState({})
  const { refetch, isFetching, data, isSuccess } = useQuery({
    queryKey: ['login', formInfo],
    queryFn: (params) => {
      const { queryKey } = params
      const { username, password } = queryKey[1] as any
      return login(username, password)
    },
    enabled: false
  })

  if (isSuccess) {
    const { user, token } = data as any
    const userid = user._id
    userInfo.userid = userid
    userInfo.token = token
    navigate('/dashboard')
    return null
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
              loading={isFetching}
              type="primary"
              className={styles.btn}
              onClick={() => {
                setFormInfo(form.getFieldsValue())
                refetch()
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
  )
}
