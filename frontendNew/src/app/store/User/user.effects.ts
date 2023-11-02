import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/service/user.service";
import { beginLogin, beginRegister, loginSuccess } from "./user.action";
import { exhaustMap, map, catchError, of } from "rxjs";
import { showAlert } from "../common/App.action";
import { Router } from "@angular/router";
import { LoginResponse } from "src/app/model/user.model";


@Injectable()
export class userEffect{

    constructor(
        private action$ : Actions,
        private service : UserService,
        private router : Router
    ){}

    _RegisterEffect = createEffect(()=>
        this.action$.pipe(
            ofType(beginRegister), 
            exhaustMap((action)=>{
                return this.service.userRegistation(action.userdata).pipe(
                    map((data)=>{
                        console.log('registered data is :',data)
                        this.router.navigate(['/login'])
                        return showAlert({
                            message: "registered successfully",
                            resultType : 'pass'
                        })
                    }), 
                    catchError((error) =>
                        of(showAlert({
                            message: "Register failed"+error.message,
                            resultType : 'fail'
                        }))
                    )
                )
            })
        )
    )

    _loginEffect = createEffect(()=>
    this.action$.pipe(
        ofType(beginLogin), 
        exhaustMap((action)=>{
            return this.service.userLogin(action.userdata).pipe(
                map((data: any)=>{
                    // console.log("Response data is:", data.response);
                    // console.log("Token is:", data.token);
                    if(data.status === 'success'){
                        localStorage.setItem("userData", JSON.stringify(data.response))
                        localStorage.setItem("usertoken", JSON.stringify(data.token))
                        this.router.navigate(['profile'])
                        return showAlert({message: "login successfull", resultType : 'pass'})
                        // return loginSuccess({data})
                    }else{
                        return showAlert({message: "something went wrong", resultType : 'fail'})
                    }
                }), 
                catchError((error) =>
                    of(showAlert({
                        message: "Login failed",
                        resultType : 'fail'
                    }))
                )
            )
        })
    )
)



}