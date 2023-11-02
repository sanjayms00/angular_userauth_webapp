import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material/snack-bar";
import { exhaustMap, map } from "rxjs";
import { emptyAction, showAlert } from "./App.action";


@Injectable()
export class appEffects {

    constructor(
        private action$ : Actions,
        private snackbar : MatSnackBar
    ){}

    _showAlert = createEffect(()=>
        this.action$.pipe(
            ofType(showAlert),
            exhaustMap((action)=>{
                console.log('alert', action)
                return this.showSnackbarAlert(action.message, action.resultType).afterDismissed().pipe(
                    map(()=>{
                        return emptyAction()
                    })
                )
            })
        )
    )
        
    showSnackbarAlert(message: string, resultType: string = 'fail'){
        // custom class for the alert button
        let _class = resultType === 'pass' ? 'green-snackbar' : 'red-snackbar'
        //message and the closing button in the alert
        return this.snackbar.open(message, 'ok', {
            verticalPosition : 'top',
            horizontalPosition : 'end',
            duration : 5000,
            panelClass : [_class]
        })
    }




}

