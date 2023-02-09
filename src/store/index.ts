import { proxy } from "valtio";
import { ProjectItem } from "../api/project";

export const userStore = proxy({
    userid: "null",
    token: ""
});

export const projectStore: Partial<ProjectItem> = proxy({

})

