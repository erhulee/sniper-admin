import axios from "axios";

export function getErrorInfo(startDate:number, endDate:number, step?:number){
    return axios.post('https://bdul0j.laf.dev/error', {
        startDate, 
        endDate, 
    })
}

export function getJSErrorInfo(startDate:number, endDate:number, step?:number){
    return axios.post('https://bdul0j.laf.dev/jserror', {
        startDate, 
        endDate, 
    })
}

