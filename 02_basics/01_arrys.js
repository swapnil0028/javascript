// arrys
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['Ironman', 'spiderman' ]

const myArr2 = new Array (3,3,3,2,4,5)
// console.log(myArr[1]);
// console.log(myArr2.length);

// arrys methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join() //strings

// console.log(newArr);

// console.log(myArr);



// slice and splice 

console.log("A ", myArr);


const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
