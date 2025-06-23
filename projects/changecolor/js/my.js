// generate color
const randomcolors = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color ;
};
let srts;
const startchange = function(){
  srts =   setInterval(changebg,1000)

    function changebg(){
    document.body.style.backgroundColor = randomcolors();

    }
}
const stoptchange = function(){
    clearInterval(srts);
    srts = null;
}

document.querySelector('#start').addEventListener('click', startchange);
document.querySelector("#stop").addEventListener('click', stoptchange);


const inserts = document.getElementById('insert');

window.addEventListener('keydown', (e) =>{
    inserts.innerHTML = "Hello";
})
