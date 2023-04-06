import axios from "axios"

export enum ProjectType {
    wxApp,
    web
}
export type ProjectParams = {
    projectName: string
    projectType: ProjectType
    projectDes: string
}
export type ProjectItem = ProjectParams & {
    uid: string,
    _id: string
}


export type ProjectListResponse = {
    data: Array<ProjectItem>
}

export function addProject(params: ProjectParams) {
    return axios.post("/addProject", params)
}

export function deleteProject(projectId: string) {
    return axios.post("/deleteProject", { projectId })
}
export function queryProject(): Promise<{
    data: any[]
}> {
    return axios.post("/queryProject")
}


