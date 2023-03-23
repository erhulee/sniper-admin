import axios from 'axios'

export function register(username: string, password: string,  password_confirm: string) {
  // debugger
  return axios.post('/register', {
    username,
    password,
    password_confirm
  })
}

export function login(username: string, password: string) {
  return axios.post<any, {token:string, user:any, expire:number}>('/login', {
    username,
    password
  })
}
