
const r=require('express').Router()
const Product=require('../models/Product')

r.get('/',async(req,res)=>{
res.json(await Product.find())
})

r.get('/:id',async(req,res)=>{
res.json(await Product.findById(req.params.id))
})

r.post('/',async(req,res)=>{
const p=new Product(req.body)
await p.save()
res.json(p)
})

r.put('/:id',async(req,res)=>{
res.json(await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}))
})

r.delete('/:id',async(req,res)=>{
await Product.findByIdAndDelete(req.params.id)
res.json({msg:"deleted"})
})

module.exports=r
