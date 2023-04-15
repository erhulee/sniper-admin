import { proxy, subscribe } from "valtio";
type UserStore = {
    userid?: string,
    userAccount?: string
    token?: string
    expire?: number
}
const _state = JSON.parse(localStorage.getItem('__SNIPER__USER') || "{}") as unknown as UserStore || {
    userid: undefined,
    token: undefined
}
export const userStore = proxy(_state);


subscribe(userStore, () => {
    localStorage.setItem('__SNIPER__USER', JSON.stringify(userStore))
})

export const clearUserStore = () => {
    userStore.token = undefined;
    userStore.userid = undefined;
}