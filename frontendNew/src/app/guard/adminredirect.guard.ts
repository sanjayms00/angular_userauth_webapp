import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin.model';

export const adminredirectGuard: CanActivateFn = (route, state) => {
  const service = inject(AdminService)
  const router = inject(Router)

  const adminData: Admin = service.getAdminDataStorage()

  if(adminData.email !== ''  && adminData.email !== null){
    router.navigate(['/admin/users']);
    return false
  }else{
    return true
  }
};
