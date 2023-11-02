import { Component, DoCheck  } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements DoCheck {
  userName = 'User'

  constructor(
    private service : UserService
  ){}


  ngDoCheck(): void {
    const data = this.service.getUserDataStorage()
    if(data.userName !== '' && data.userName !== null){
      this.userName = data.userName
      // if(data.image){
      //   console.log(this.profileImage)
      //   this.profileImage = data.image
      // }
    
    }
    
  }


}
