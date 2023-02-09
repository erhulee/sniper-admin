export type CoreData = {
    title: string,
    tooltip?: string,
    value: number | string,
    des: string
    ratio: number
    trend: 'less' | 'more',
    dataSource?: any[]
}