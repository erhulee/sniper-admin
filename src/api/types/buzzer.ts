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

export interface Buzzer {
    _id?: string
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

export type queryBuzzerResponse = {
    data: Array<{
        _id: string,
    } & Buzzer>,
    success: boolean
}