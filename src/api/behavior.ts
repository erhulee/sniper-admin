import axios from "axios"
import { getBehaviorResponse } from "./types/behavior";
function getBehavior(startDate: number, endDate: number): Promise<getBehaviorResponse> {
    return axios.post("/behavior", {
        startDate, endDate
    })
}
export default getBehavior;