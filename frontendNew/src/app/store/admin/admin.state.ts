import { createEntityAdapter } from "@ngrx/entity";
import { Admin, adminModel } from "src/app/model/admin.model";


export const adminAdapter = createEntityAdapter<Admin>();

export const AdminState: adminModel = adminAdapter.getInitialState();   //initiate the state