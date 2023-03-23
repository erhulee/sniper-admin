import { message } from 'antd'
import axios from 'axios'
import { userStore } from '../store'
import { globalFilterStore } from '../store/globalFilter'

export default function initAxios() {
  axios.defaults.baseURL = 'https://bdul0j.laf.dev'
  axios.interceptors.request.use(
    (req)=>{
        // console.log(req.auth)
        // (req as any).auth   = {
        //     token: userStore.token
        // }
        (req.headers as any).token = userStore.token
        
        if(globalFilterStore.selectedProject?._id){
          req.data.appid = globalFilterStore.selectedProject?._id
        }
        // (req.auth as any ).uid = userStore.userid;
        return req
    }, (req)=>{
        return req
    })
  axios.interceptors.response.use(
    (res) => {
      console.log("Res:", res)
      return Promise.resolve(res.data)
    },
    (e) => {
      // message.error('网络异常')
      return Promise.reject(e)
    }
  )
}
