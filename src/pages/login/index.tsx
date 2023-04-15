import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import styles from "./index.module.scss";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
export default function Login() {
  const [isLoginStage, setIsLoginStage] = useState(true);
  useAuth();

  return (
    <div className={`${styles.page}`}>
      {isLoginStage ? (
        <LoginForm goRegister={() => setIsLoginStage(false)}></LoginForm>
      ) : (
        <RegisterForm goLogin={() => setIsLoginStage(true)}></RegisterForm>
      )}
    </div>
  );
}
