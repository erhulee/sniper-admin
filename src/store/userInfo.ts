import { proxy, subscribe } from "valtio";
const _state =  JSON.parse(localStorage.getItem('__SNIPER__USER') as any) || {
    userid: undefined,
    token: undefined
}
export const userStore = proxy (_state);


subscribe(userStore, () => {
    localStorage.setItem('__SNIPER__USER', JSON.stringify(userStore))
})