import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateListingComponent } from './component/associate-listing/associate-listing.component';
import { EditAssociateComponent } from './component/edit-associate/edit-associate.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard } from './guard/auth.guard';
import { AdminInterceptor } from './interceptor/admin.interceptor';
import { UserInterceptor } from './interceptor/user.interceptor';
import { redirectGuard } from './guard/redirect.guard';
import { adminauthGuard } from './guard/adminauth.guard';
import { adminredirectGuard } from './guard/adminredirect.guard';

const routes: Routes = [
  {path: '', component : HomeComponent,},
  {path: 'register', component : RegisterComponent, canActivate:[redirectGuard]},
  {path: 'profile', component : ProfileComponent, canActivate:[authGuard]},
  {path: 'admin/users', component : AssociateListingComponent, canActivate:[adminauthGuard]},
  {path: 'admin/users/edit/:id', component : EditAssociateComponent, canActivate:[adminauthGuard]},
  {path: 'login', component : LogInComponent, canActivate:[redirectGuard]},
  {path: 'admin/login', component : AdminLoginComponent, canActivate:[adminredirectGuard]},
  {path: 'admin', component : AdminLoginComponent, canActivate:[adminredirectGuard]},
  {path: '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
