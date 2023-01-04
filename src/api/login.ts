import axios from 'axios'

export function register(username: string, password: string) {
  // debugger
  return axios.post('/register', {
    username,
    password
  })
}

export function login(username: string, password: string) {
  return axios.post('/login', {
    username,
    password
  })
}
