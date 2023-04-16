export type DateTime = {
  raw_date: Date
  formate: string
}
export enum AlarmOperator {
  bg, // big
  ls, // less
  eq // equal
}

export type AlarmRule = {
  name: string
  operator: AlarmOperator
  value: number,
  webhook: string
}

export type BuzzerItem = {
  bid: string
  title: string
  rule: AlarmRule
  createdTime: DateTime
}


export type Project = {
  projectDes: string
  projectName: string
  projectType: number
  uid: string
  _id: string
}


type PromiseType<T extends unknown> = T extends Promise<infer T> ? T : never;
export type ReturnAPIResultType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? PromiseType<R> : any;

