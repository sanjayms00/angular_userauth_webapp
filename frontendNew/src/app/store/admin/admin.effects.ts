import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of } from "rxjs";
import { showAlert } from "../common/App.action";
import { Router } from "@angular/router";
import { adminBeginLogin } from "./admin.action";
import { AdminService } from "src/app/service/admin.service";


@Injectable()
export class adminEffect{

    constructor(
        private action$ : Actions,
        private service : AdminService,
        private router : Router
    ){}

    

    _adminLoginEffect = createEffect(()=>
    this.action$.pipe(
        ofType(adminBeginLogin), 
        exhaustMap((action)=>{
            // debugger;
            console.log("admin effect")
            return this.service.adminLogin(action.userdata).pipe(
                map((data: any)=>{
                    // console.log("Response data is:", data.response);
                    // console.log("Token is:", data.token);
                    if(data.status === 'success'){
                        console.log("data is",data)
                        localStorage.setItem("adminData", JSON.stringify(data.response[0]))
                        localStorage.setItem("admintoken", JSON.stringify(data.token))
                        this.router.navigate(['admin/users'])
                        return showAlert({message: "admin login successfull", resultType : 'pass'})
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