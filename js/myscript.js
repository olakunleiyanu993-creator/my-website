  const a=[];
  const b=[];
function logs(){
  let users=document.getElementById('demo1').value;
  let password=document.getElementById('demo2').value;
  if(users== "iyanu" && password== '1234'){
   window.location="menu.html";
  }
  else{
    alert('Incorrect password');
  }
}

function menu(){
    document.getElementById('good').innerHTML=`
    <section class="n">
   <a href="menu.html" class="text-decoration-none fs-4">Home</a>
   <a href="product.html" class="text-decoration-none fs-4">Product</a>   
   <a href="contact.html" class="text-decoration-none fs-4">Contact us</a>
   <a href="about.html" class="text-decoration-none fs-4">About us</a>
   <a href="" class="text-decoration-none fs-4 c2" style="position: relative; bottom: 8px;"><i class="fa fa-search"></i></a>
  </section>`
    document.getElementById('good').style.height='95vh'
    document.getElementById('good').style.marginTop='5px'
  }
    function menu(){
    document.getElementById('good').innerHTML=`
    <section class="n">
   <a href="menu.html" class="text-decoration-none fs-4">Home</a>
   <a href="product.html" class="text-decoration-none fs-4">Product</a>   
   <a href="contact.html" class="text-decoration-none fs-4">Contact us</a>
   <a href="about .html" class="text-decoration-none fs-4">About us</a>
   <a href="" class="text-decoration-none fs-4 c2" style="position: relative; bottom: 8px;"><i class="fa fa-search"></i></a>
  </section>`
    document.getElementById('good').style.height='95vh'
    document.getElementById('good').style.marginTop='5px'
  }
  function menu(){
    document.getElementById('good').innerHTML=`
    <section class="n">
   <a href="menu.html"class="text-decoration-none fs-4">Home</a>
   <a href="product.html" class="text-decoration-none fs-4">Product</a>   
   <a href="contact.html" class="text-decoration-none fs-4">Contact us</a>
   <a href="about .html" class="text-decoration-none fs-4">About us</a>
   <a href="" class="text-decoration-none fs-4 c2" style="position: relative; bottom: 8px;"><i class="fa fa-search"></i></a>
  </section>`
    document.getElementById('good').style.height='95vh'
    document.getElementById('good').style.marginTop='5px'
  }
    function menu(){
    document.getElementById('good').innerHTML=`
    <section class="n">
   <a href="menu.html"class="text-decoration-none fs-4">Home</a>
   <a href="product.html" class="text-decoration-none fs-4">Product</a>   
   <a href="contact.html" class="text-decoration-none fs-4">Contact us</a>
   <a href="about .html" class="text-decoration-none fs-4">About us</a>
   <a href="" class="text-decoration-none fs-4 c2" style="position: relative; bottom: 8px;"><i class="fa fa-search"></i></a>
  </section>`
    document.getElementById('good').style.height='95vh'
    document.getElementById('good').style.marginTop='5px'
  }
  // function shoe(){
  //   let shoe=document.getElementById('shoe')
  //   let price=document.getElementById('price')
  //   a.push(shoe);
  //   b.push(price);
  //   all=""
  //   all+='<table width="400px" border="5px">'
  //   all+='<th>Product</th> <th>Price</th>'
  //   for(let c=0; c<a.length; c++){
  //      all+='<tr>'
  //     all+= `<td>${a[c]}</td>
  //      <td>${b[c]}</td>`
  //      all+='</tr>'
  //   }
  //   all+='</table>'
  //   document.getElementById('cart').innerHTML=all
  // }