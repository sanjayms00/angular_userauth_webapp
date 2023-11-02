import { Injectable } from '@angular/core';
import { baseUrl } from "../environment/environment";
import { HttpClient } from '@angular/common/http';
import { Associate } from '../model/associate.model';


@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get<Associate[]>(`${baseUrl}/admin/get-users`);
  }

  getUserByCode(id: any){
    console.log("inside service", id)
    return this.http.get<Associate>(`${baseUrl}/admin/edit-user/${id}`);
  }

  updateUserData(id : string, data: Associate){
    return this.http.put(`${baseUrl}/admin/update-user/${id}`, data);
  }

  deleteUserByCode(id: string){
    return this.http.delete(`${baseUrl}/admin/delete-user/${id}`);
  }

  addUserData(data: Associate){
    return this.http.post(`${baseUrl}/register_user`, data)
  }

}
