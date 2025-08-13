const a=[];
const b=[];
const c=[];
function add(){
  let product=document.getElementById('product').value
  let qty=document.getElementById('qty').value
  let price=0

  if(product=='Apple'){
    price='3000'
  }else if(product=='Orange'){
    price='3500'
  }else if(product=='Pawpaw'){
    price='350'
  }else if(product=='Mango'){
    price='4900'
  }else if(product=='Cherry'){
    price='2600'
  }else if(product=='Banana'){
    price='1400'
  }else if(product=='Pineapple'){
    price='1050'
  }else if(product=='Grape'){
    price='5200'
  }

  if(a.indexOf(product)==-1){
  a.push(product);
  b.push(qty)
  c.push(price)
  refresh()
  }else{
  let e=a.indexOf(product);
  let f=Number(b[e])
  b[e]=f+Number(qty)
  }
refresh()
}

function plus(plu){
  b[plu]=Number(b[plu])+1
  refresh()
}

function minus(min){
  if(b[min] >1){
   b[min]=Number(b[min])-1
  }
  refresh()
}

function del(g){
a.splice(g,1)
refresh()
}

function refresh(){
  allproducts=''
  all=0
  allproducts+='<table border="5" width="700px">'
  allproducts+='<th>Product</th> <th>Quantity</th> <th>Price</th> <th>Total</th> <th>Delete</th>'
  for(d=0; d<a.length; d++){
  const total=b[d]*c[d] 
  allproducts+='<tr>'
  allproducts+=`<td>${a[d]}</td> <td><button onclick="plus(${d})">+</button>${b[d]}<button onclick="minus(${d})">-</button></td> <td>${c[d]}</td> <td>${total}</td> <td><button onclick="del(${d})">Delete</button></td>`
  allproducts+='</tr>'
  all+=total
  }
  allproducts+='<tr>'
  allproducts+=`<td colspan="5">${all}</td>`
  allproducts+='</tr>'
  allproducts+='</table>'
  document.getElementById('cart').innerHTML=allproducts
}