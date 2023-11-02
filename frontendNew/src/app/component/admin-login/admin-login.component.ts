import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { adminBeginLogin } from 'src/app/store/admin/admin.action';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {

  constructor(
    private builder :FormBuilder,
    private store :Store
  ){}

  adminloginForm = this.builder.group({
    email : this.builder.control('', Validators.required),
    password : this.builder.control('', Validators.required),
  })

  onSubmitLogin(){
    // debugger;
    if(this.adminloginForm.valid){
      const formData = {
        email : this.adminloginForm.value.email as string,
        password : this.adminloginForm.value.password as string
      }
      this.store.dispatch(adminBeginLogin({
        userdata: formData
      }))
    }
  }


}
