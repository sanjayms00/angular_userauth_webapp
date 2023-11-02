import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from "src/app/environment/environment"
import { User, UserCredential, UserInfo } from '../model/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }
  
  userRegistation(userData : User){
    return this.http.post(`${baseUrl}/register_user`, userData)
  }
  
  userLogin(userData : UserCredential)
  {
    return this.http.post(`${baseUrl}/login_auth`, userData)
  }
  
  fileUpload(form : FormData)
  {
    return this.http.post(`${baseUrl}/api/upload`, form)
  }
  


  getUserDataStorage(){
    const userData : UserInfo = {
      userName: '',
      mobile: '',
      email: '',
      status: false,
      role: ''
    }
    const data = localStorage.getItem("userData")
    console.log("local",data)
    if(data !== null){
      return JSON.parse(data)
    }else{
      return userData
    }
  }



}
