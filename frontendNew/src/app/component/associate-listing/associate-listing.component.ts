import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssociateComponent } from '../add-associate/add-associate.component';
import { AssociateService } from 'src/app/service/associate.service';
import { Associate } from 'src/app/model/associate.model';
import { Store } from '@ngrx/store';
import { getUserListState } from 'src/app/store/client.selectors';
import { deleteUser, loadUser } from 'src/app/store/client.action';
import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: 'app-associate-listing',
  templateUrl: './associate-listing.component.html',
  styleUrls: ['./associate-listing.component.css'],
})
export class AssociateListingComponent implements OnInit {

  userData: Associate[] = [];
  // datasource: any;
  displayedColums: string[] = ['index', 'userName', 'email', 'mobile', 'action'];

  searchData = ''


  //inject mat-dialog
  constructor(
    private dialog: MatDialog,
    private service: AssociateService,
    private store: Store
  ) {}

  ngOnInit(): void {
    //first dispatch an action
    this.store.dispatch(loadUser());
    this.store.select(getUserListState).subscribe((data) => {
      this.userData = data;
      // console.log(this.userData);
    });
  }

  addUser() {
    //0 is default value
    this.openPopUp(0, 'Create User');
  }

  deleteUserData(id : string){
    if(confirm("Do you want to remove the data")){
      this.store.dispatch(deleteUser({id}))
    }
  }

  //for opening the pop up
  openPopUp(code: number, title: string) {
    //pass the component to be opened in the dialog modal
    this.dialog.open(AddAssociateComponent, {
      width: '50%',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '400ms',
      data: {
        code,
        title,
      },
    });
  }
}
