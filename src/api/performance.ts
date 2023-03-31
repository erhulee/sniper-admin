import axios from 'axios'

export function getWebVitals(startDate: number, endDate: number) {
    return axios.post("/getWebVital", {
        startDate, endDate
    })
}