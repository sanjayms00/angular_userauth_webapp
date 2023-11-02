import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Associate } from 'src/app/model/associate.model';
import { addUser } from 'src/app/store/client.action';


@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})
export class AddAssociateComponent implements OnInit {
  title = 'Create User'
  //inject the form builder
  constructor(
    private builder: FormBuilder,
    private store : Store,
    private ref: MatDialogRef<AddAssociateComponent>
    ){}

  ngOnInit(): void {
    
  }

  userForm = this.builder.group({
    userName : this.builder.control('', Validators.required),
    email : this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    mobile : this.builder.control('', Validators.required),
    password : this.builder.control('', Validators.required)
  })

  ClosePopup() {
    this.ref.close();
  }

  
  saveUser(){
    if(this.userForm.valid){
      const {userName, mobile, email, password} = this.userForm.value
      let userFormData: Associate = {
        userName: userName as string,
        mobile: mobile as string,
        email: email as string,
        password : password as string
      }
      this.store.dispatch(addUser({input : userFormData}))
      this.ClosePopup();
    }
  }

}
