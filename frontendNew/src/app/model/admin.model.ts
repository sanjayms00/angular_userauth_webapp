import { EntityState } from "@ngrx/entity"

export interface Admin {
    _id : string,
    email : string,
    active : boolean,
}

export interface adminCredential {
    email : string,
    password : string
}

export interface AdminLoginResponse {
    response: Admin[]; 
    token: string;
}
  
export interface adminModel extends EntityState<Admin>{
    
}