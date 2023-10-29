const express = require('express')
const adminRoute = express.Router();
const authHelper = require('../helpers/authHelper')
const clientHelper = require('../helpers/clientHelper')


adminRoute.get('/',(req, res)=>{
    res.send('admin')
})

adminRoute.post('/loginAuth', async (req, res)=>{
    try {
        const {email, password} = req.body;
        const adminData = await authHelper.findAdmin(email, password);
        if(adminData.length !== 0){
            res.json({status: 'success', message: "admin is confirmed"});
        }else{
            throw new Error("admin not found")
        }
    } 
    catch (error) 
    {
        res.json({status: 'error', message: error.message});
    }
})

adminRoute.post('/add-admin', async (req, res)=>{
    try {
        const status = await authHelper.saveAdmin(req.body) 
        if(!status){ 
            throw new Error('failed to add admin')
        }
        res.json({status: 'success', message: 'admin saved'})
    } 
    catch (error) {
        res.json({status: 'error', message: error.message});
    }
})

adminRoute.get('/get-users', async (req, res)=>{
    try {
        const clientData = await clientHelper.getUsers() 
        if(!clientData){ 
            throw new Error('failedto get the user data')
        }
        res.send(clientData)
    } 
    catch (error) {
        res.send(error.message);
    }
})

adminRoute.delete('/delete-users/:id', async (req, res)=>{
    try {
        let { id } = req.params
        if(!id){
            throw new Error('id is not present')
        }
        const status = await clientHelper.deleteUsers(id) 
        if(!status){ 
            throw new Error('failed to delete the user data')
        }
        res.json({status: "success", message: "deleted successfully"})
    } 
    catch (error) {
        res.json(error.message);
    }
})

adminRoute.get('/edit-users/:id', async (req, res)=>{
    try {
        let { id } = req.params
        if(!id){
            throw new Error('id is not present')
        }
        const userData = await clientHelper.editUsers(id) 
        if(userData.length < 1){ 
            throw new Error('no data found')
        }
        res.send(userData)
    } 
    catch (error) {
        res.json(error.message);
    }
})


adminRoute.post('/update-users', async (req, res)=>{
    try {
        console.log(req.body)
        const status = await clientHelper.updateUsers(req.body) 
        if(!status){ 
            throw new Error('failed to update the user data')
        }
        res.json({status: "success", message: "updated successfully"})
    } 
    catch (error) {
        res.json(error.message);
    }
})  


module.exports = adminRoute