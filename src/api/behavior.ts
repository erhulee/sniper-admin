import axios from "axios"

export enum Impact {
    Positive,
    Negative
}
export enum Trend {
    More,
    Less
}
export type BehaviorCategory = "PV" | "UV" | "BounceRate"
export type BehaviorData = {
    core: {
        [key in BehaviorCategory]: {
            category: key,
            value: {
                value: string
                impact: Impact
                rate: string
            }
        }
    },
    barData: Array<{
        datetime: string,
        pathname: string,
        count: number
    }>,
    trendData: Array<{
        pathname: string,
        trend: Array<{
            datatime: string,
            count: number
        }>
    }>

}
function getBehavior(startDate: number, endDate: number): Promise<{
    success: boolean,
    data: BehaviorData
}> {
    return axios.post("/behavior", {
        startDate, endDate
    })

}

export default getBehavior;