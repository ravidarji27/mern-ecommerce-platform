
const mongoose=require('mongoose')
const Product=require('../backend/models/Product')

mongoose.connect('mongodb://localhost:27017/ecommerce')

async function run(){
await Product.deleteMany({})
await Product.insertMany([
{name:'Phone',price:500,tags:['electronics','mobile']},
{name:'Laptop',price:900,tags:['electronics','computer']},
{name:'Shoes',price:80,tags:['fashion']}
])
console.log("Seeded")
process.exit()
}

run()
