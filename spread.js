// JavaScript Spread Operator
// The spread operator is a new addition to the features available in the JavaScript ES6 version.
// The spread operator ... is used to expand or spread an iterable or an array. For example,


const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);
console.log(...arrValue);

// Copy Array Using Spread Operator
const arr = [1,2,3,4];
const arr2 = [4,5,6,7];
const arr3 = [...arr, ...arr2];
console.log(arr3)
const arr4 = [...arr, 10,12,23,45];
console.log(arr4);

// Clone Array Using Spread Operator

const arr5 = [2,3,4,5,6];
const arr6 = arr5;
arr5.push(100);
console.log("arr5",arr5);
console.log("arr6",arr6);

arr6.push(200);

console.log("arr5",arr5);
console.log("arr6",arr6);

const arr7 = [...arr5];
console.log("before");
console.log("with spread operator arr7",arr7);
console.log("with spread operator arr5",arr5);

console.log("After");
arr5.push(1000);
console.log("with spread operator arr7",arr7);
console.log("with spread operator arr5",arr5);


// Spread Operator with Object

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}

const obj5 = {b:1,c:2,d:4};
const obj6 = {...obj5, a:3};
console.log(obj6);