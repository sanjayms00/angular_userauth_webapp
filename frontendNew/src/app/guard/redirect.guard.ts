import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserInfo } from '../model/user.model';
export const redirectGuard: CanActivateFn = (route, state) => {

  const service = inject(UserService)
  const router = inject(Router)

  const userData: UserInfo = service.getUserDataStorage()

  if(userData.userName !== ''  && userData.userName !== null){
    router.navigate(['/profile']);
    return false
  }else{
    return true
  }
};
