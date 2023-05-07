import axios from 'axios'
type WebVitalCategory = "TTFB" | "CLS" | "FID" | "LCP" | "FCP"
type Degree = "good" | "bad" | "needs-improvement"

type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer R
    ? R
    : never
type UnionToIntersectionFn<T> = (
    T extends T ? (x: () => T) => unknown : never
) extends (x: infer R) => unknown
    ? R
    : never

type Prepend<Arr extends unknown[], Item> = [Item, ...Arr];
type UnionToTuple<T, Result extends unknown[] = [], Last = GetUnionLast<T>> = [
    T,
] extends [never]
    ? // return result
    Result
    : // remove last element of T and push it into Result
    UnionToTuple<Exclude<T, Last>, Prepend<Result, Last>>;



// type AdditionalMap<T extends Array<any>, U extends Record<string, any>> = T extends [infer F, ...infer Last] ? [
//     {
//         category: F
//     },
//     AdditionalMap<Last, U>
// ] : never


type WebVitalResponse = {
    data: Array<{
        category: WebVitalCategory,
        path_performance: Array<{
            partition: {
                [d in Degree]: number
            },
            path: string
        }>,
        trendData: Array<{
            count: number
            date: number
            degree: Degree
        }>
    }>
}

export function getWebVitals(startDate: number, endDate: number): Promise<WebVitalResponse> {
    return axios.post("/getWebVital", {
        startDate, endDate
    })
}

