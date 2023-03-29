import { Impact, Trend } from "@/api/behavior";

export type CoreData = {
    title: string,
    tooltip?: string,
    value: number | string,
    des: string
    ratio: number
    trend: Trend
    impact: Impact
    dataSource?: any[]
}