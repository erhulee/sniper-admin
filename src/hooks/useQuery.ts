import { AxiosResponse } from "axios";
import { useState } from "react";
import { QueryParams } from "../api/type";
export enum HTTPStatus {
    SUCCESS,
    PENDING,
    ERROR
}
type QueryOptions<T> = {
    query: T,
    // auto?: boolean,
    initialData: T
}

type QueryResult<T, R> = {
    data: R,
    run: (query:T)=>void,
    status: HTTPStatus

}
export function useQuery<T, R>(queryFn:(data: T) => Promise<AxiosResponse<any, any>>, options: QueryOptions<T>):QueryResult<T, R>{
    const {query, initialData} = options
    const [data, setData] = useState(initialData);
    const [status, setStatus] = useState(HTTPStatus.PENDING);

    const run = ()=>{
        queryFn(query).then((res)=>{
            setData(res as any);
            setStatus(HTTPStatus.SUCCESS)
        }).catch(()=>{
            setStatus(HTTPStatus.ERROR)
        })
    }
    run();
    return {
        data,
        run,
        status
    }    
}