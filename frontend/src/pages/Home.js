
import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Home(){
const [products,setProducts]=useState([])

useEffect(()=>{
axios.get('http://localhost:5000/api/products')
.then(r=>setProducts(r.data))
},[])

return(
<div>
<h1>Products</h1>
{products.map(p=>(
<div key={p._id}>
<a href={"/product/"+p._id}>{p.name}</a>
<p>${p.price}</p>
</div>
))}
</div>
)
}
