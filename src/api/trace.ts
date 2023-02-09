import axios from "axios";
import { QueryParams } from "./type";

export function addTrace(data:any){
    return axios.post('/addTrace', data)
}

export function queryTrace(data: QueryParams){
    return axios.post("/queryTrace", data)
}

export function deleteTrace(data: {_id: string}){
    return axios.post("/deleteTrace", data)
}



