import { createReducer, on } from "@ngrx/store"
import { AdminState } from "./admin.state"


const _userReducer = createReducer(AdminState)

export function userReducer(state: any, action: any){
    return _userReducer(state, action)
}