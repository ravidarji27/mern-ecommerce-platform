
import React,{useState} from 'react'
import axios from 'axios'

export default function Dashboard(){
const [name,setName]=useState('')
const [price,setPrice]=useState('')

const add=()=>{
axios.post('http://localhost:5000/api/products',{name,price})
}

return(
<div>
<h1>Admin Dashboard</h1>
<input placeholder="name" onChange={e=>setName(e.target.value)}/>
<input placeholder="price" onChange={e=>setPrice(e.target.value)}/>
<button onClick={add}>Add Product</button>
</div>
)
}
