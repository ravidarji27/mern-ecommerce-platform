
function similarity(a,b){
const A=new Set(a)
const B=new Set(b)
const c=[...A].filter(x=>B.has(x))
return c.length/(A.size+B.size-c.length)
}
function recommend(products,target){
return products.map(p=>({p,score:similarity(p.tags,target.tags)}))
.sort((a,b)=>b.score-a.score)
.slice(0,4)
.map(x=>x.p)
}
module.exports=recommend
