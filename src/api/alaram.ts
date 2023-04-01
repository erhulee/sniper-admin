import axios from "axios"

export enum SupportRuleName {
    JS_ERROR,
    RESOURCE_ERROR,
    LCP,
    FID,
    TTFB,
    CLS,
    FCP
}

export enum AlarmOperator {
    bg, // big
    ls, // less
    eq // equal
}

export enum NotifyType {
    Lark
}

export enum BuzzerStatus {
    disable = 0,
    enable = 1
}


export type BuzzerParams = {
    appid: string
    name: string
    rule: {
        name: SupportRuleName,
        operator: AlarmOperator,
        value: number,
    },
    status?: boolean
    notifyType: NotifyType
    webhook: string
    createTime: number
}

export type Alarm = {
    _id: string,
    buzzerid: string,
    buzzerName: string
    appid: string,
    notifyType: string,
    rule: {
        name: SupportRuleName,
        operator: AlarmOperator
        value: number
    },
    currentValue: number,
    timedate: number
}


export function addBuzzer(params: Omit<BuzzerParams, "appid" | "notifyType" | "createTime">) {
    return axios.post("/addBuzzer", params)
}

export function queryBuzzer(): Promise<{
    data: Array<{
        _id: string,
    } & BuzzerParams>,
    success: boolean
}> {
    return axios.post("/queryBuzzer")
}

export function deleteBuzzer(params: { _id: string }) {
    return axios.post("/deleteBuzzer", params)
}

export function queryAlarms(params: {
    startDate: number,
    endDate: number
}): Promise<{
    success: true,
    data: Array<{
        datetime: string,
        count: number
    }>
}> {
    return axios.post("/queryAlarams", params)
}

export function queryCurrentAlarms(): Promise<{
    success: true,
    data: Alarm[]
}> {
    return axios.post("/searchAlarams")
}