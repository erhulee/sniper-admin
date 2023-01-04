import { message } from 'antd'
import axios from 'axios'

export default function initAxios() {
  axios.defaults.baseURL = 'https://hnwmjd.lafyun.com:443'
  axios.interceptors.response.use(
    (res) => {
      const data = res.data
      const code = data.code
      if (code == 0) {
        const msg = data.msg
        if (msg) {
          message.success(msg)
        }
        return Promise.resolve(data.data)
      } else {
        message.warning(data.error)
        return Promise.reject(data.error)
      }
    },
    (e) => {
      message.error('网络异常')
      return Promise.reject(e)
    }
  )
}
