

import { Injectable } from "@angular/core";
import { AssociateService } from "../service/associate.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUser, loadUserSuccess, loadUserFail, addUser, addUserSuccess, getUser, getUserSuccess, updateUser, updateUserSuccess, deleteUser, deleteUserSuccess } from "./client.action";
import { catchError, map, switchMap, exhaustMap, of } from "rxjs";
import { showAlert } from "./common/App.action";



@Injectable()
export class clEffects {

    constructor(
        private action$: Actions,
        private service: AssociateService
    ) { }


    //load users effect
    _loadUser = createEffect(() => 
        this.action$.pipe(
            ofType(loadUser),
            exhaustMap((action) => {
                return this.service.getUserData().pipe(
                    map((data) => {
                        return loadUserSuccess({ list: data });  
                    }),
                    catchError((error) => of(
                        loadUserFail({ errorMessage: error.message })   
                    ))
                );
            })
        )
    )
        

    //get user data by Id
    _getUser = createEffect(() => 
        this.action$.pipe(
            ofType(getUser),
            exhaustMap((action) => {
                return this.service.getUserByCode(action.id).pipe(
                    map((data) => {
                        return getUserSuccess({obj : data});  
                    }),
                    catchError((error) => of(
                        showAlert({
                        message: "Failed to get the user,"+error.message,
                        resultType: "fail"
                    })))
                );
            })
        )
    )


    //get user data by Id
    _updateUser = createEffect(() => 
        this.action$.pipe(
            ofType(updateUser),
            switchMap((action) => {
                return this.service.updateUserData(action.id, action.data).pipe(
                    switchMap((data) => {
                        // console.log(data)
                        return of(updateUserSuccess({obj : data}),
                        showAlert({
                            message: "Edited successfully",
                            resultType: "pass"
                        }))
                    }),
                    catchError((error) => of(
                        showAlert({
                        message: "Failed to update the user,"+error.message,
                        resultType: "fail"
                    })))
                );
            })
        )
    )



    //add user effect
    _addUser = createEffect(() => 
        this.action$.pipe(
            ofType(addUser),
            switchMap((action) => {
                return this.service.addUserData(action.input).pipe(
                    switchMap((data) => {
                        // console.log("data is", data)
                        return of(addUserSuccess({input: data}),
                        showAlert({
                            message: "Created successfully",
                            resultType: "pass"
                        }))
                    }),
                    catchError((_error)=> of(showAlert({
                        message: "Failed to add user",
                        resultType: "fail"
                    })))
                )
            })
        )
            
    )

            //add user effect
    _deleteUser = createEffect(() => 
    this.action$.pipe(
        ofType(deleteUser),
        switchMap((action) => {
            return this.service.deleteUserByCode(action.id).pipe(
                switchMap((data) => {
                    // console.log("data is", data)
                    return of(deleteUserSuccess({id : action.id}),
                    showAlert({
                        message: "deleted successfully",
                        resultType: "pass"
                    }))
                }),
                catchError((_error)=> of(showAlert({
                    message: "Failed to deleted user",
                    resultType: "fail"
                })))
            )
        })
    )
        
)




}