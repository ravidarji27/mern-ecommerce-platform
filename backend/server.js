
require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const auth=require('./routes/authRoutes')
const products=require('./routes/productRoutes')
const cart=require('./routes/cartRoutes')
const orders=require('./routes/orderRoutes')
const recommend=require('./routes/recommendRoutes')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(e=>console.log(e))

app.use('/api/auth',auth)
app.use('/api/products',products)
app.use('/api/cart',cart)
app.use('/api/orders',orders)
app.use('/api/recommend',recommend)

app.get('/',(req,res)=>res.send("API Running"))

app.listen(5000,()=>console.log("Server running on 5000"))
