import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { beginLogin } from 'src/app/store/User/user.action';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private builder :FormBuilder,
    private store :Store
  ){}
  ngOnInit(): void {
    localStorage.removeItem('usertoken');
      localStorage.removeItem('userData');
  }



    loginForm = this.builder.group({
      email : this.builder.control('', Validators.required),
      password : this.builder.control('', Validators.required),
    })

    onSubmitLogin(){
      if(this.loginForm.valid){
        const formData = {
          email : this.loginForm.value.email as string,
          password : this.loginForm.value.password as string
        }
        console.log("dispatch")
        this.store.dispatch(beginLogin({
          userdata: formData
        }))
      }
    }


}
