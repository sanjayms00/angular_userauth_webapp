import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from "src/app/environment/environment"
import { Admin, adminCredential } from '../model/admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http : HttpClient
  ) { }
  
  adminLogin(userData : adminCredential)
  {
    return this.http.post(`${baseUrl}/admin/login_auth`, userData)
  }
  
  getAdminDataStorage(){
    const adminData : Admin = {
      email: '',
      _id: '',
      active: false
    }
    const data = localStorage.getItem("adminData")
    console.log("local admin",data)
    if(data !== null){
      return JSON.parse(data)
    }else{
      return adminData
    }
  }



}
