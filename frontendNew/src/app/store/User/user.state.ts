import { createEntityAdapter } from "@ngrx/entity";
import { User, userModel } from "src/app/model/user.model";

export const userAdapter = createEntityAdapter<User>();

export const UserState: userModel = userAdapter.getInitialState();   //initiate the state