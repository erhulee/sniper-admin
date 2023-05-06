export enum Impact {
    Positive,
    Negative
}
export enum Trend {
    More,
    Less
}
export type BehaviorCategory = "PV" | "UV" | "BounceRate" | "New"
type CoreDataCard = {
    [key in BehaviorCategory]: {
        category: key,
        value: {
            value: string
            impact: Impact
            rate: string
        }
    }
}
export type BehaviorData = {
    core: CoreDataCard,
    barData: Array<{
        datetime: string,
        path: string,
        count: number
    }>,
    trendData: Array<{
        path: string,
        trend: Array<{
            datatime: string,
            count: number
        }>
    }>

}

export type getBehaviorResponse = {
    data: BehaviorData
}