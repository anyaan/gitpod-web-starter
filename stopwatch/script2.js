let number = 1
let startButton=document.getElementById("start")
let hyouji=document.getElementById("num")
function tick() {
  hyouji.textContent=number;
  // document.write(number)
  // document.write("yobi");
  number++;
}
function start(){
  setInterval(tick, 1000);

}
startButton.onclick=start;