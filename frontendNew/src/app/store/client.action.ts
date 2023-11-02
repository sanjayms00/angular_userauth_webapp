import { createAction, props } from "@ngrx/store";
import { Associate } from "../model/associate.model";

export const LOAD_USER = '[user] load the user data';
export const LOAD_USER_SUCCESS = '[user] load user success';
export const LOAD_USER_FAIL = '[user] load user failed';

export const ADD_USER = '[user] add the user data';
export const ADD_USER_SUCCESS = '[user] add user success';

export const GET_USER = '[user] get the user data';
export const GET_USER_SUCCESS = '[user] get user success';

export const UPDATE_USER = '[user] update the user data';
export const UPDATE_USER_SUCCESS = '[user] update user success';

export const DELETE_USER = '[user] delete the user data';
export const DELETE_USER_SUCCESS = '[user] delete user success';




export const loadUser = createAction(LOAD_USER);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{list : Associate[]}>());
export const loadUserFail = createAction(LOAD_USER_FAIL, props<{errorMessage : string}>());


export const addUser = createAction(ADD_USER, props<{input : Associate}>());
export const addUserSuccess = createAction(ADD_USER_SUCCESS, props<{input : any}>());


export const getUser = createAction(GET_USER, props<{id : any}>());
export const getUserSuccess = createAction(GET_USER_SUCCESS, props<{obj : Associate}>());


export const updateUser = createAction(UPDATE_USER, props<{id : string , data : Associate}>());
export const updateUserSuccess = createAction(UPDATE_USER_SUCCESS, props<{obj : any}>());

export const deleteUser = createAction(DELETE_USER, props<{id : string}>());
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS, props<{id : string}>());

