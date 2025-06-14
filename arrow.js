// arrow functions

const users = {
    name : "aaman",
    price :100
}

console.log(this);



// function  ones(){
//     let names = "aamn";
//     console.log(this.names);
// }

// ones()  

const datas =  () =>{
 let names = "aamn";
    // console.log(this);
}


const news = (num1, num2)=>{
    return num1 + num2
}

const newss =  (num1, num2)=> (num1 + num2)

console.log(news(45 ,45))
console.log(newss(45 ,45))