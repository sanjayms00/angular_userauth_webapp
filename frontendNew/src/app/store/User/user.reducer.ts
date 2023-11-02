import { createReducer, on } from "@ngrx/store"
import { UserState } from "./user.state"

const _userReducer = createReducer(UserState)

export function userReducer(state: any, action: any){
    return _userReducer(state, action)
}