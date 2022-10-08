
let countEl = document.getElementById("count-El");
let paraEl = document.getElementById("para-El");
let count = 0


function increment() {  
  count = count + 1
  countEl.textContent = count
}

function save(){
    countStr = count + " - "
    paraEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}