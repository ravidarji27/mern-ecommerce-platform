
const r=require('express').Router()
const stripe=require('stripe')(process.env.STRIPE_KEY)
const Order=require('../models/Order')

r.post('/checkout',async(req,res)=>{
const {items,total,userId}=req.body

const session=await stripe.checkout.sessions.create({
payment_method_types:['card'],
line_items:items.map(i=>({
price_data:{
currency:'usd',
product_data:{name:i.name},
unit_amount:i.price*100
},
quantity:i.qty
})),
mode:'payment',
success_url:'http://localhost:3000/success',
cancel_url:'http://localhost:3000/cancel'
})

await Order.create({userId,items,total})
res.json({id:session.id})
})

module.exports=r
