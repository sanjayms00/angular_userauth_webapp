import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('admintoken')
    const clonedAdminRequset  = request.clone({
      setHeaders : {
        authorizationAdmin : `berer ${token}`
      }
    })
    return next.handle(clonedAdminRequset);
  }
}
