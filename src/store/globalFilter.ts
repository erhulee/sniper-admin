import { proxy } from "valtio";
import { Project } from "../pages/types";
export const globalFilterStore = proxy<{
    selectedProject:null | Project
}>({
    selectedProject: null
})