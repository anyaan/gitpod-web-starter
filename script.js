let res=document.getElementById("result")
let bott=document.getElementById("bott")
function change(){
  r=Math.random()
  /*document.write(r)*/
  if(r<0.2){
    res.textContent="大吉";
    res.style.color="red";
  }else if(r<0.7){
    res.textContent="吉";
    res.style.color="green";
  }else{
    res.textContent="凶";
    res.style.color="black";
  }
  
}
bott.onclick=change;