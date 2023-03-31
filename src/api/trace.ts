import axios from "axios";
import { QueryParams } from "./type";
export enum TraceType {
    Performance,
    Business
}

export type Trace = { _id?: string, name: string, des: string, type: TraceType, properties: string[] }
export function addTrace(data: Trace) {
    return axios.post('/addTrace', data)
}

export function queryTrace(data?: QueryParams): Promise<{
    success: boolean,
    data: {
        list: Trace[],
        total: number
    }
}> {
    return axios.post("/queryTrace", data)
}

export function deleteTrace(data: { _id: string }) {
    return axios.post("/deleteTrace", data)
}



