import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{

  loggedIn : boolean = false
  ismenuvisible = false
  hide : boolean = false
  Adminhide : boolean = false
  isadmin = false


  constructor(
    private router : Router
  ){}


  ngOnInit(): void {
   
  }





  ngDoCheck(): void {
    if(localStorage.getItem("usertoken")){
      this.hide = true
    }else{
      this.hide = false
    }

    if(localStorage.getItem("admintoken")){
      this.Adminhide = true
    }else{
      this.Adminhide = false
    }
    
    const currentroute = this.router.url;
    if(currentroute.includes('admin')){
      console.log(currentroute)
      this.isadmin = true
    }else{
      this.isadmin = false
    }

    if (currentroute === '/login' || currentroute === '/register' || currentroute === '/admin/login') {
      this.ismenuvisible = false
    } else {
      this.ismenuvisible = true;
    }
  }

  logout(){
    localStorage.removeItem('usertoken');
    localStorage.removeItem('userData');
    localStorage.removeItem('image');
    this.router.navigate(['/login'])
  }

  logoutAdmin(){
    localStorage.removeItem('admintoken');
    localStorage.removeItem('adminData');
    this.router.navigate(['/admin/login'])
  }


}
