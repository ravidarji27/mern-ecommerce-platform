
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function Product(){
const {id}=useParams()
const [p,setP]=useState(null)

useEffect(()=>{
axios.get('http://localhost:5000/api/products/'+id)
.then(r=>setP(r.data))
},[id])

if(!p) return "Loading"

return(
<div>
<h2>{p.name}</h2>
<p>{p.description}</p>
<p>${p.price}</p>
</div>
)
}
