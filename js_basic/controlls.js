// call and controlls
// if else 
// loop



const arr = [1,2,3,4,5]

for(const num of arr ){
    // console.log(arr);
    
}


// maps
const map = new Map()
map.set('IN',"India")
map.set('UR',"Us Americal")
map.set('UAE',"arab")

console.log(map);

for (const [key, value] of map) {
    // console.log(key,':',value)
}


const obs = {
    cp : 'NFS',
    cpp: 'NFS2',
}

for (const key in obs) {
//    console.log(key)
}


const langs = ["hs", "asa","py"]

for (const key in map) {
        // console.log(key)
}

langs.forEach( function (val){
    //  console.log(val);
})

langs.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
})

 const mynums = [1,2,3,4,5,6,7,8,9,10]


//  const newnums = mynums.filter( (num) => num >= 4)
const  newnums = [];
 console.log(newnums)

// mynums.forEach(nums)  {
//     if(num> 4){
//        newnums.push(num) 
//     }
// }

console.log(newnums)

