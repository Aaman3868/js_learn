// Arrays

const data = ["aman","sahil","saad", 4, 20];
const data1 = ["ironman"];


// console.log(data);


//Array methods 

data.push(6,7)
data.pop()
data.unshift(8)
data.shift()

// console.log(data.includes(6));
// console.log(data.indexOf(6));


const newarr = data.join()
// console.log(newarr);


// console.log("A ", data);

const newss = data.slice(1,3);
// console.log(newss)

const newsss = data.splice(1,3);
// console.log(newsss)


const maravel = ['thor','captain','ironman'];
const dc = ['superman','wonderwomen','batman'];

const alls = maravel.concat(dc)
// console.log(alls);


const ors = [1,2,3,[2,4,6,[4,8,9]]];
const real = ors.flat(Infinity);

console.log(Array.from("Aaman"));
// console.log(real);