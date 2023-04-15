import axios from "axios";

export function getErrorInfo(startDate: number, endDate: number, step?: number): Promise<{
    success: true,
    data: any[]
}> {
    return axios.post('/error', {
        startDate,
        endDate,
    })
}
export function getJSErrorInfo(startDate: number, endDate: number, step?: number): Promise<{
    success: true,
    data: any[]
}> {
    return axios.post('/jserror', {
        startDate,
        endDate,
    })
}

export function getHTTPErrorInfo(startDate: number, endDate: number): Promise<{
    data: Array<{
        url: string             //请求地址
        last_timestamp: number  // 上次发生时间
        trend: Array<{
            timestamp: number
            count: number
        }>
    }>
}> {
    return axios.post("/http_error", {
        startDate,
        endDate,
    })
}


export function getResourceErrorInfo(startDate: number, endDate: number): Promise<{
    data: Array<{
        src: string             //请求地址
        last_timestamp: number  // 上次发生时间
        trend: Array<{
            timestamp: number
            count: number
        }>
    }>
}> {
    return axios.post("/resource_error", {
        startDate,
        endDate,
    })
}

export function getCrashErrorInfo(startDate: number, endDate: number): Promise<{
    data: Array<{
        path: string             //请求地址
        last_timestamp: number  // 上次发生时间
        trend: Array<{
            timestamp: number
            count: number
        }>
    }>
}> {
    return axios.post("/crash_error", {
        startDate,
        endDate,
    })
}

export function uploadSourceMap(file: Blob, appid: string) {
    const data = new FormData();
    data.append("files", file);
    data.append("appid", appid)
    return axios.post('/sourceMapUpload', data, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
}

export function querySourceMapList(): Promise<{
    data: Array<{
        fileName: string,
    }>
}> {
    return axios.post('/querySourceMap', {})
}

export function deleteSourceMap(fileId: string, fileName: string) {
    return axios.post('/deleteSourceMap', {
        _id: fileId,
        fileName
    })
}

export enum IssueStatus {
    UNRESOLVE,
    RESOLVED,
}

export function queryErrorDetail(issueId: string): Promise<{
    data: {
        message: string
        resolveTime: number
        stack: string
        status: IssueStatus
        _id: string
    }
}> {
    return axios.post("/queryIssue", {
        issueId
    })
}


export function updateIssueStatus(issueId: string, status: IssueStatus): Promise<any> {
    return axios.post("/updateIssueStatus", {
        issueId,
        status,
        resolveTime: status == IssueStatus.RESOLVED ? Date.now().valueOf() : 0
    })
}

type IssueDetailResponseData = {
    occurrences_count: number
    impacts_count: number
    // window_count: number
    // mac_count: number
    trendData: Array<
        {
            datetime: number
            count: number
        }
    >

    paths: Array<
        {
            _id: string,
            occurrences_count: number
        }
    >
}
export function queryIssueData(issueId: string, startDate: number, endDate: number, step?: number): Promise<IssueDetailResponseData> {
    return axios.post("/queryIssueDetail", {
        issueId,
        startDate,
        endDate
    })
}

export function queryRrWebTask(issueContent: string): Promise<{
    data: {
        _id: string,
        rrwebStack: any[]
    },
    ok: boolean
}> {
    return axios.post('/queryVideoStack', {
        issueContent
    })
}