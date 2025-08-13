const a=[];
const b=[];
const c=[];
function cart(){
  product=document.getElementById('product').value
  qty=document.getElementById('qty').value
  price=0

  if(product=='Apple'){
    price='1800'
  }else if(product=='Orange'){
    price='4100'
  }else if(product=='Beans'){
    price='2500'
  }else if(product=='Garri'){
    price='800'
  }
  if(a.indexOf(product)==-1){
   a.push(product)
   b.push(qty)
   c.push(price)
  }else{
    let him=a.indexOf(product)
    let her=Number(b[him])
    b[him]=her+Number(qty)
  }
Refresher()
} 
function plus(plu){
  b[plu]=Number(b[plu])+1
  Refresher()
}
function minus(min){
  if(b[min]>1){
   b[min]=Number(b[min])-1
  }
  Refresher()
}
function del(i){
  a.splice(i,1)
  Refresher()
}
function Refresher(){
  allproduct=''
  path=0
  allproduct+='<table width="600px" border="5">'
  allproduct+=`
  <tr>
  <th>Product</th>
  <th>Quantity</th>
  <th>Price</th>
  <th>Total</th>
  <th>Delete</th>
  </tr>`
  for(d=0; d<a.length; d++){
    const total=b[d]*c[d]
   allproduct+=`
   <tr>
   <td><center>${a[d]}</center></td>
   <td><center><button onclick="plus(${d})">+</button>${b[d]}<button onclick="minus(${d})">-</button></center></td>
   <td><center>${c[d]}</center></td>
   <td><center>${total}</center></td>
   <td><center><button onclick="del(${d})">Delete</button></center></td>
   </tr>`
   path+=total
  }
  allproduct+=`
  <tr>
  <td colspan="6"><center>${path}</center></td>
  </tr>`
  allproduct+='</table>'
  document.getElementById('send').innerHTML=allproduct
}