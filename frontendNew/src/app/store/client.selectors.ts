import { createFeatureSelector, createSelector } from "@ngrx/store";
import { associateModel } from "../model/associate.model";

export const getClientstate = createFeatureSelector<associateModel>('client')

export const getUserListState = createSelector(getClientstate, (state)=>{
    return state.list
})

export const getUserState = createSelector(getClientstate, (state)=>{
    return state.user
})


export const getUserById = createSelector(getClientstate, (state)=>{
    return state.user
})