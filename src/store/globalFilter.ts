import dayjs, { Dayjs } from "dayjs";
import { proxy } from "valtio";
import { Project } from "../pages/types";
export const globalFilterStore = proxy<{
    selectedProject:null | Project,
    startDate: Dayjs
    endDate:  Dayjs
}>({
    selectedProject: null,
    startDate: dayjs(Date.now()).subtract(7,"day"),
    endDate: dayjs(Date.now()),
})