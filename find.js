// JavaScript Array find()
// The find() method returns the value of the first array element that 
// satisfies the provided test function.


const arr = [5, 12, 8, 130, 44];
console.log("first even", arr.find((element) => element % 2 === 0));
console.log("even in the arrya", arr.filter((element) => element % 2 === 0));
console.log("first even", arr.find((element) => element % 2 !== 0));

const arr2 = ["hello", "world", "this", "is", "a", "string"];

console.log( arr2.find((element) => element.length % 2 === 0));
console.log( arr2.filter((element) => element.length % 2 === 0));