import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin.model';

export const adminauthGuard: CanActivateFn = (route, state) => {
  
  const service = inject(AdminService)
  const router = inject(Router)

  const userData: Admin = service.getAdminDataStorage()

  if(userData.email !== ''  && userData.email !== null){
    return true
  }else{
    router.navigate(['/admin/login']);
    return false
  }

};
