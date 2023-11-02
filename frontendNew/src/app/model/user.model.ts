import { EntityState } from "@ngrx/entity"

export interface User {
    _id ?: string,
    userName : string,
    mobile : string,
    password : string,
    email : string,
    status ?: boolean,
    image ?: string,
    role ?: string
}

export interface UserCredential {
    email : string,
    password : string
}

export interface UserInfo {
    userName : string,
    mobile : string,
    email : string,
    status : boolean,
    image ?: string,
    role : string
}


export interface LoginResponse {
    response: User[]; 
    token: string;
  }
  


export interface userModel extends EntityState<User>{
    
}