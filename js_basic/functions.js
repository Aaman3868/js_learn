// functions 


function myname(num1 , num2){
   let result = num1 + num2 
   return result
}

const result = myname(45 , 45)
 console.log(result)



 function loginuser(user){
    if(user === undefined){
    console.log(`${user} just login`);
    return
    }else{
     return `login`
    }
 }

 console.log(loginuser('aman'))




 function calculateprice(...num1){
    return num1;

 }

 console.log(calculateprice(200 ,40 ,5));
 const user = {
    username : "aman",
    prince : 450
 }
 

 function  handles(abx){
    console.log(abx.username)
 }

 handles('aaman')