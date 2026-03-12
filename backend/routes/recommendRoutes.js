
const r=require('express').Router()
const Product=require('../models/Product')
const recommend=require('../services/recommendation')

r.get('/:id',async(req,res)=>{
const products=await Product.find()
const target=products.find(p=>p._id.toString()===req.params.id)
res.json(recommend(products,target))
})

module.exports=r
