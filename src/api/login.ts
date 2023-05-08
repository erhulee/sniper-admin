import axios from 'axios'

export function register(username: string, password: string, password_confirm: string, email: string, checkCode: string) {
  return axios.post('/register', {
    username,
    password,
    password_confirm,
    email,
    check_code: checkCode
  })
}

export function login(username: string, password: string) {
  return axios.post<any, { token: string, user: any, expire: number }>('/login', {
    username,
    password
  })
}

export function reset(password: string, password_confirm: string, email: string, checkCode: string) {
  return axios.post('/reset', {
    password,
    password_confirm,
    email,
    check_code: checkCode
  })
}

export function getCheckCode(email: string) {
  return axios.post("/getCheckCode", {
    email
  })
}

