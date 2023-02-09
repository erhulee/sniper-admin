export enum TraceType {
    Performance,
    Business
}
export type TraceInfo  = {
    _id?:   string;
    uid?:   string;
    name:   string;
    des:    string;
    type:   TraceType;
    properties: string[];
    count:  number; 
}


export enum ModalStatus {
    ADD,
    EDIT
}
