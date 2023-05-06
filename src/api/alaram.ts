import axios from "axios"
import { queryAlarmsParams, queryAlarmsResponse, queryCurrentAlarmsResponse } from "./types/alaram"
import { Buzzer, queryBuzzerResponse } from "./types/buzzer"

export function addBuzzer(params: Omit<Buzzer, "appid" | "notifyType" | "createTime">) {
    return axios.post("/addBuzzer", params)
}
export function queryBuzzer(): Promise<queryBuzzerResponse> {
    return axios.post("/queryBuzzer")
}
export function deleteBuzzer(params: { _id: string }) {
    return axios.post("/deleteBuzzer", params)
}
export function updateBuzzer(params: Omit<Buzzer, "appid" | "notifyType" | "createTime">) {
    return axios.post("/updateBuzzer", params)
}
export function queryAlarms(params: queryAlarmsParams): Promise<queryAlarmsResponse> {
    return axios.post("/queryAlarams", params)
}
export function queryCurrentAlarms(): Promise<queryCurrentAlarmsResponse> {
    return axios.post("/searchAlarams")
}

