import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/service/user.service';
import { showAlert } from 'src/app/store/common/App.action';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileEmail = ''
  profileId = ''
  profilemobile = ''
  profileName = ''
  profileImage = 'assets/images/avatar.png'
  selectedFile: File | null = null;

  constructor(
    private builder : FormBuilder,
    private service : UserService,
    private http : HttpClient,
    private store : Store
  ){}

  // profileForm = this.builder.group({
  //    : this.builder.control('', Validators.required)
  // })

  ngOnInit(): void {
    const data = this.service.getUserDataStorage()
    if(data.userName !== '' && data.userName !== null){
      this.profileId = data._id
      this.profileEmail = data.email
      this.profilemobile = data.mobile
      this.profileName = data.userName
      if(localStorage.getItem('image')){
        this.profileImage = localStorage.getItem("image") as string
      }
    
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onImageUpload() {
    if (!this.selectedFile) {
      return;
    }
    const form = new FormData();
    form.set("file", this.selectedFile);
    form.set("id", this.profileId);
    this.service.fileUpload(form).subscribe((data: any)=>{
      console.log(data)
        if(data.success === true){
          // alert(data.success)
          localStorage.setItem("image", data.image)
          this.profileImage = data.image
          
          this.store.dispatch(showAlert({
            message: 'updation success',
            resultType: 'pass'
          }))
        }else{
          this.store.dispatch(showAlert({
            message: 'updation failed',
            resultType: 'fail'
          }))
        }
    })
    
  }
  




}
