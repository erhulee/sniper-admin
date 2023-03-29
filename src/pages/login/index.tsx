import { userStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function Login() {
  const [isLoginStage, setIsLoginStage] = useState(true);
  const isInline = userStore.userid;
  const navigate = useNavigate();

  useEffect(() => {
    if (isInline) {
      navigate("/dashboard/performance");
    }
  }, []);

  return (
    <div className={styles.page}>
      {isLoginStage ? (
        <LoginForm goRegister={() => setIsLoginStage(false)}></LoginForm>
      ) : (
        <RegisterForm goLogin={() => setIsLoginStage(true)}></RegisterForm>
      )}
    </div>
  );
}
