import { Impact, Trend } from "@/api/behavior";

export type CoreData = {
    title: string,
    tooltip?: string,
    value: number | string,
    des: string
    ratio: number | string
    trend: Trend
    impact: Impact
    dataSource?: any[]
}