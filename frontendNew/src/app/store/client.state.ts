import { associateModel } from "../model/associate.model";

export const initialState: associateModel = {
    list : [],
    errorMessage : '',
    user : {
        _id: '',
        userName: "",
        mobile: '',
        email: ""
    }
}