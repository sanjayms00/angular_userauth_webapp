const User = require('../model/userModel')
const mongoose = require('mongoose')

const getUsers = async () =>{
    return await User.find()
}

const deleteUsers = async (id) => {
    id = new mongoose.Types.ObjectId(id)
    return await User.deleteOne({_id : id})
}

const editUsers = async (id) => { 
    id = new mongoose.Types.ObjectId(id)
    return await User.find({_id : id})
} 

const updateUsers = async ({_id, name, mobile, email}) => {
    if(!_id || !name || !mobile || !email){
        return false
    }
    id = new mongoose.Types.ObjectId(_id)
    return await User.updateOne(
        {_id : id}, 
        {
            $set : {
                name, mobile, email
            }
        }
    )
}

const checkUser = async (email) => {
    try {
        const data = await User.find({email})
        if(data.length > 0){
            return true
        }else{
            return false
        }
    } catch (error) {
        return error
    }
}



module.exports = {
    getUsers,
    deleteUsers,
    editUsers,
    updateUsers,
    checkUser
}