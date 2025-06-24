const promise1 = new  Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async')
        resolve()
    },1000)
});


const promise2 = new  Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async')
        resolve({usernam: "Aaman"})
    },1000)
});


const promise3 = new  Promise(function(resolve, reject) {
    setTimeout(function(){
       let err = true;
      if(!err){
         resolve({usernam: "Aaman"})
      }else{
            reject("Rejected")
      }
    },1000)
});


promise3.then(function(user){
    console.log(user);
})
  promise3.then((user) => {
    return user;
})
// promise1.then(function(){
//     console.log('asynces to resoleveds');
// })