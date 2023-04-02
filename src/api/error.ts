import axios from "axios";

export function getErrorInfo(startDate: number, endDate: number, step?: number) {
    return axios.post('/error', {
        startDate,
        endDate,
    })
}

export function getJSErrorInfo(startDate: number, endDate: number, step?: number) {
    return axios.post('/jserror', {
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