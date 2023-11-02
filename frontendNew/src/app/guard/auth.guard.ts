import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';
import { UserInfo } from '../model/user.model';

export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(UserService)
  const router = inject(Router)

  const userData: UserInfo = service.getUserDataStorage()

  if(userData.userName !== ''  && userData.userName !== null){
    return true
  }else{
    router.navigate(['/login']);
    return false
  }
};
