import { createAction, props } from "@ngrx/store";
import { Admin, adminCredential } from "src/app/model/admin.model";


export const adminBeginLogin = createAction('[auth] admin login start', props<{userdata : adminCredential}>())
export const adminloginSuccess = createAction('[auth] admin login success', props<{data : Admin}>())