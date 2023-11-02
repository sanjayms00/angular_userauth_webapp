import { createAction, props } from "@ngrx/store";
import { User, UserCredential } from "src/app/model/user.model";

export const beginRegister = createAction('[auth] register start', props<{userdata : User}>())

export const beginLogin = createAction('[auth] login start', props<{userdata : UserCredential}>())
export const loginSuccess = createAction('[auth] login success', props<{data : any}>())