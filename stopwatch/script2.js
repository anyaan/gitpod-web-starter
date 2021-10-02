let number = document.getElementById("num")
function greet() {
  let current=Number.parseInt(number.textContent);
  document.write(current);
  number.textContent=current++;
}

setInterval(greet, 1000);