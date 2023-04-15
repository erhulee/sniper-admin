import { userStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { subscribe } from "valtio";

export default function useAuth() {
  const nav = useNavigate();

  subscribe(userStore, () => {
    const token = userStore.token;
    const expire = userStore.expire;
    if (token) {
      nav("/dashboard/performance");
    } else {
      nav("/");
    }
  });
}
