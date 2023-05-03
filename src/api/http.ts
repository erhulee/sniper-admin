import axios from 'axios'
import dayjs from 'dayjs'
import { userStore } from '../store'
import { globalFilterStore } from '../store/globalFilter'

export default function initAxios() {
  axios.defaults.baseURL = 'https://bdul0j.laf.dev'
  axios.interceptors.request.use(
    (req) => {
      // token 挂载
      (req.headers as any).token = userStore.token
      // 兜底 data
      if (req.data == null) req.data = {};

      // appid 默认添加
      if (globalFilterStore.selectedProject?._id) {
        req.data.appid = globalFilterStore.selectedProject?._id
      }

      // 修改过滤器时间
      if (req.data.endDate) req.data.endDate = dayjs(req.data.endDate).endOf("day").valueOf();
      if (req.data.startDate) req.data.startDate = dayjs(req.data.startDate).startOf("day").valueOf();
      return req
    }, (req) => {
      return req
    })
  axios.interceptors.response.use(
    (res) => {
      return Promise.resolve(res.data)
    },
    (e) => {
      // message.error('网络异常')
      return Promise.reject(e)
    }
  )
}
