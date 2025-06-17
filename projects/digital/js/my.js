const clocks = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date()
    clocks.innerHTML = date.toLocaleTimeString();
},1000)