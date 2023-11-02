import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociateListingComponent } from './component/associate-listing/associate-listing.component';
import { AddAssociateComponent } from './component/add-associate/add-associate.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { materialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { clientReducer } from './store/client.reducer';
import { clEffects } from './store/client.effects';
import { appEffects } from './store/common/App.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { EditAssociateComponent } from './component/edit-associate/edit-associate.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { userReducer } from './store/User/user.reducer';
import { userEffect } from './store/User/user.effects';
import { LogInComponent } from './component/log-in/log-in.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UserInterceptor } from './interceptor/user.interceptor';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminInterceptor } from './interceptor/admin.interceptor';
import { adminEffect } from './store/admin/admin.effects';
import { SearchPipePipe } from './pipes/search-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AssociateListingComponent,
    AddAssociateComponent,
    NotFoundComponent,
    EditAssociateComponent,
    HomeComponent,
    RegisterComponent,
    LogInComponent,
    ProfileComponent,
    AdminLoginComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    materialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({client : clientReducer, main : userReducer}),
    EffectsModule.forRoot([clEffects, appEffects, userEffect, adminEffect]),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : UserInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
