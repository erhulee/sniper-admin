export type DateTime = {
  raw_date: Date
  formate: string
}
export enum AlarmOprator {
  bg, // big
  ls, // less
  eq // equal
}

export type AlarmRule = {
  name: string
  oprator: AlarmOprator
  value: number
}

export type Buzzer = {
  bid: string
  title: string
  rule: AlarmRule
  createdTime: DateTime
}
