import axios from "axios"

export enum ProjectType {
    wxApp,
    web
}
export type ProjectParams = {
    projectName:    string
    projectType:    ProjectType
    projectDes:     string
} 
export type ProjectItem = ProjectParams & {
    uid: string,
    _id: string
} 


export type ProjectListResponse = {
    data: Array<ProjectItem>
}

export function addProject(params:ProjectParams){
    return axios.post("/createProject", params)
} 

export function queryProject(){
    return axios.post("/queryProject")
}


