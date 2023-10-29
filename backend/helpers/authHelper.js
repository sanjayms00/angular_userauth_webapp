const Admin = require('../model/adminModel')
const  User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const findAdmin = async (email, password) =>{
    return await admin.find({email, password})
}

const saveAdmin = async ({email, userName, password}) => {
    if(!email || !password || !userName)
    {
        return false
    }
    return adminData = new Admin({
        userName,
        password,
        email: email.toLowerCase(),
        active: true
    }).save()   
}

const checkUser = async (email, password) => {
    return await User.find({email, password})
}

const generateToken = async (secret, id) => {
    if(!secret || !id){
        return false
    }else{
        const data = {
            time: new Date(), 
            id
        }
        return jwt.sign(data, secret)   //return token
    }
    
}

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash)=>{
            if(err){
                reject(err)
            }else{
                resolve(hash)
            }
        })
    })
}


module.exports = {
    findAdmin,
    saveAdmin,
    checkUser,
    generateToken,
    encryptPassword
}