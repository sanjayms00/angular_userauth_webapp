import { createReducer, on } from "@ngrx/store";
import { initialState } from "./client.state";
import { addUserSuccess, deleteUserSuccess, getUserSuccess, loadUserFail, loadUserSuccess, updateUserSuccess } from "./client.action";

const _clientReducer = createReducer(initialState, 
    on(loadUserSuccess, (state, action)=>{
        return {
            ...state, 
            list: [...action.list],
            errorMessage : ''
        }
    }),
    on(loadUserFail, (state, action)=>{
        return {
            ...state, 
            list: [],
            errorMessage : action.errorMessage
        }
    }),
    on(addUserSuccess, (state, action)=>{
        return {
            ...state, 
            list : [...state.list, action.input],
            errorMessage : ''
        }
    }),
    on(getUserSuccess, (state, action)=>{
        return {
            ...state, 
            user : action.obj,
            errorMessage : ''
        }
    }),
    on(updateUserSuccess, (state, action)=>{
        const newData = state.list.map((item)=>{
            return item._id === action.obj._id ? action.obj : item
        })
        return {
            ...state, 
            list : newData,
            errorMessage : ''
        }
    }),
    on(deleteUserSuccess, (state, action)=>{
        console.log("delete action  called")
        const userData = state.list.filter((item)=>item._id !== action.id )
        return {
            ...state, 
            list : userData,
            errorMessage : ''
        }
    }),
)

export function clientReducer(state:any, action:any){
    return _clientReducer(state, action)
}