import { Buzzer } from "./buzzer"
export type Alarm = Omit<Buzzer, "_id" | "name" | "createTime" | "webhook"> & {
    _id: string,
    buzzerid: string,
    buzzerName: string
    currentValue: number,
    timedate: number
}

export type queryAlarmsParams = {
    startDate: number,
    endDate: number
}

export type queryAlarmsResponse = {
    data: Array<{
        datetime: string,
        count: number
    }>
}

export type queryCurrentAlarmsResponse = {
    data: Alarm[]
}