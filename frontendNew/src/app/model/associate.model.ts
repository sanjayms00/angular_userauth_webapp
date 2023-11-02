export interface Associate {
    _id ?: string,
    userName : string,
    mobile : string,
    email : string,
    password ?: string
}



export interface associateModel {
    list : Associate[],
    user : Associate,
    errorMessage : string
}
