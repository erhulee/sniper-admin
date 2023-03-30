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


type BuzzerParams = {
    appid: string
    name: string
    rule: {
        name: SupportRuleName,
        operator: AlarmOperator,
        value: number,
    },
    notifyType: NotifyType
    webhook: string
    createTime: number
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