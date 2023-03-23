import axios from "axios";

export function getJSErrorInfo(startDate:number, endDate:number, step?:number){
    return axios.post('https://bdul0j.laf.dev/jserror', {
        startDate, 
        endDate, 
    })
}

