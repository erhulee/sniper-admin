import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import styles from "./index.module.scss";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import ResetForm from "./resetForm";
export default function Login() {
  const [formStage, setFormStage] = useState(1);
  useAuth();
  const goLogin = () => setFormStage(1);
  const goRegister = () => setFormStage(2);
  const goReset = () => setFormStage(3);
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.form} flex justify-center items-center py-7`}>
        {formStage == 1 && (
          <LoginForm goRegister={goRegister} goReset={goReset} />
        )}
        {formStage == 2 && <RegisterForm goLogin={goLogin} />}
        {formStage == 3 && <ResetForm goLogin={goLogin} />}
      </div>
    </div>
  );
}
