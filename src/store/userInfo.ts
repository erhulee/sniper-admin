import { proxy, subscribe } from "valtio";
type UserStore = {
    userid?: string,
    token?: string
}
const _state =  JSON.parse(localStorage.getItem('__SNIPER__USER') || "{}")  as unknown as UserStore|| {
    userid: undefined,
    token: undefined
}
export const userStore = proxy (_state);


subscribe(userStore, () => {
    localStorage.setItem('__SNIPER__USER', JSON.stringify(userStore))
})