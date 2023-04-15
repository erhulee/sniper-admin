import { globalFilterStore } from "@/store"
import { subscribe } from "valtio"

function useRegisterGlobalFilter(update: Function) {
    subscribe(globalFilterStore, () => update())
}
export default useRegisterGlobalFilter