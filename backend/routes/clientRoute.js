require('dotenv').config();
const express = require('express');
const clientRoute = express.Router();
const User = require('../model/userModel')
const authHelper = require('../helpers/authHelper')
const authMiddleware = require('../middleware/authMiddleware')


const clientHelper = require('../helpers/clientHelper')

clientRoute.get('', (req, res)=>{
    res.send('home')
    
})

clientRoute.get('/profile', authMiddleware.authenticate, async (req, res)=>{
    console.log("the user is", req.user)
    await User.find().then((val)=>{
        res.send(val)
    })
})



clientRoute.post('/register_user', async (req, res)=>{
    try{
        const {userName, email, mobile, password, ConfPassword} = req.body
        const findUser = await clientHelper.checkUser(email)
        console.log(findUser)
        if(!findUser)
        {
            if(password !== ConfPassword){
                //401 unauthorized user
                return res.status(401).json({status: 'error', message : 'Password Does not match'})
            }
    
            const hash = await authHelper.encryptPassword(password)
    
            const userData = new User({
                userName,
                mobile,
                email,
                password: hash  
            });
            await userData.save()
            //200 ok success
            res.status(200).json({status: 'success', message : 'Registed Successfully'})
        }else{
            // 409 Conflict user already exists.
            res.status(409).json({status: 'error', message : 'User already exist'})
        }
    } 
    catch(error)
    {
        // 500 internal server error.
        res.status(500).json({status: 'error', message : error.message})
    }
})

clientRoute.post('/login_auth', async (req, res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            throw new Error('insufficient data')
        }
        const checkResponse = await authHelper.checkUser(email, password)
        if(checkResponse.length > 0){
            let jwtSecretKey = process.env.JWT_SECRET_KEY;

            const token = await authHelper.generateToken(jwtSecretKey, checkResponse[0]._id)
            if(!token){
                throw new Error('something went wronng')
            }
            res.json({status: 'success', message : 'login successful', token})
        }else{
            throw new Error('invalid credentials')
        }
    } catch (error) {
        res.json({status: 'error', message : error.message})
    }   
})


module.exports = clientRoute