
const r=require('express').Router()
const Cart=require('../models/Cart')

r.post('/add',async(req,res)=>{
const {userId,productId}=req.body
let cart=await Cart.findOne({userId})
if(!cart) cart=new Cart({userId,items:[]})
const item=cart.items.find(i=>i.productId===productId)
if(item) item.qty+=1
else cart.items.push({productId,qty:1})
await cart.save()
res.json(cart)
})

r.post('/remove',async(req,res)=>{
const {userId,productId}=req.body
let cart=await Cart.findOne({userId})
cart.items=cart.items.filter(i=>i.productId!==productId)
await cart.save()
res.json(cart)
})

r.get('/:userId',async(req,res)=>{
res.json(await Cart.findOne({userId:req.params.userId}))
})

module.exports=r
