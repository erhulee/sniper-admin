import dayjs, { Dayjs } from "dayjs";

export function dateFormat(date: number | Dayjs) {
    return dayjs(date).format("MM/DD-HH时")
}

export function digitalFormat(value: number | string, option: {
    needPercent?: boolean,
    fixed?: number
} = {}) {
    const { needPercent = false, fixed = 2 } = option;
    return Number(value).toFixed(fixed)
}