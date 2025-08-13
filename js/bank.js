let namme=""
let email=""
let number=""
let bank="Palmpay"
let balance=0
const all_people=[];
function register(){
  let all=""
  namme=document.getElementById('name').value
  email=document.getElementById('email').value
  number=document.getElementById('number').value
  let acc="05"+Math.random()*10000000000
  acc=acc.toString()
  let account=acc.substring(0,11);
  let de='<button onclick="dep()">Deposite</button>'
  let wi='<button onclick="wit()">Withdraw</button>'
  let overall=[namme,email,number,bank,account,balance,de,wi]
  all_people.push(overall)

  all+='<table width="1000px" border="5">'
  all+=`<th>Name</th>
       <th>Email</th>
       <th>Number</th>
       <th>Bank name</th>
       <th>Account</th>
       <th>Balance</th>
       <th>Deposite</th>
       <th>Withdraw</th>`

    for(let i=0; i<all_people.length; i++){
      all+='<tr>'
      for(let k=0; k<all_people[i].length; k++){
        all+=`<td>${all_people[i][k]}</td>`
      }
      all+='</tr>'
    }
  all+='</table>'
  document.getElementById('bank').innerHTML=all
}
