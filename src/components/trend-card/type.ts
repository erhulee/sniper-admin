export type TrendCardData = {
    title: string
    tooltip: string
    ratio: string
    trend: 'less' | 'more'
    pivot: string
    dataSource: any[]
}