import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { beginRegister } from 'src/app/store/User/user.action';
import { showAlert } from 'src/app/store/common/App.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private builder : FormBuilder,
    private store : Store
  ){}

  registerForm = this.builder.group({
    userName : this.builder.control('', Validators.compose([Validators.required, Validators.minLength(2)])),
    email : this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    mobile : this.builder.control('', Validators.required),
    password : this.builder.control('', Validators.required),
    confirmPassword : this.builder.control('', Validators.required)
  })

  registerFormSubmit(){
    if(this.registerForm.valid){
      const {password, confirmPassword } = this.registerForm.value
      if(password !== confirmPassword){
        // alert("password incorrect")
        this.store.dispatch(showAlert({
          message: 'password incorrect',
          resultType: 'fail'
        }))
      }else{
        // console.log(this.registerForm.value)
        const formData = {
          userName : this.registerForm.value.userName as string,
          email : this.registerForm.value.email as string,
          mobile : this.registerForm.value.mobile as string,
          password : this.registerForm.value.password as string
        }

        this.store.dispatch(beginRegister({
          userdata: formData
        }))
      }
    }
  }


}
