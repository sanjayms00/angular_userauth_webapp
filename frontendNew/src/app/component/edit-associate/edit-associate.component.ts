import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUser, updateUser } from 'src/app/store/client.action';
import { getUserById } from 'src/app/store/client.selectors';

@Component({
  selector: 'app-edit-associate',
  templateUrl: './edit-associate.component.html',
  styleUrls: ['./edit-associate.component.css']
})
export class EditAssociateComponent implements OnInit {
  id !: any
  
  EditUserForm = this.builder.group({
    userName : this.builder.control('', Validators.required),
    email : this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    mobile : this.builder.control('', Validators.required)
  })

  constructor(
    private builder: FormBuilder,
    private route : ActivatedRoute,
    private store : Store,
    private router : Router
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.dispatch(getUser({ id: this.id }));
    this.store.select(getUserById).subscribe((data: any)=>{
        this.EditUserForm.setValue({
          userName : data[0].userName, 
          email : data[0].email,
          mobile : data[0].mobile
        })
    })
  }



  editUser(){
    if(this.EditUserForm.valid){
      const data = {
        userName : this.EditUserForm.value.userName as string,
        mobile : this.EditUserForm.value.mobile as string,
        email : this.EditUserForm.value.email as string
      }
      this.store.dispatch(updateUser({id :this.id, data }))

      setTimeout(() => {
        this.router.navigate(['/admin/users'])
      }, 1000);
    }
  }


}
