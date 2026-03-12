
const r=require('express').Router()
const User=require('../models/User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

r.post('/register',async(req,res)=>{
const hash=await bcrypt.hash(req.body.password,10)
const user=new User({...req.body,password:hash})
await user.save()
res.json(user)
})

r.post('/login',async(req,res)=>{
const user=await User.findOne({email:req.body.email})
if(!user) return res.status(400).json("Invalid credentials")
const valid=await bcrypt.compare(req.body.password,user.password)
if(!valid) return res.status(400).json("Invalid credentials")
const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
res.json({token,user})
})

module.exports=r
