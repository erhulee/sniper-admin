import { useState } from 'react'
import styles from './index.module.scss'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

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
