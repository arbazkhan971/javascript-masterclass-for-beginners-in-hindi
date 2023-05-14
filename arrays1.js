console.log("Arrays in JS");

const arr = [1, 2, 3, 4, 5,6,3,45,01,10,23];
console.log("arr",arr);
console.log(typeof arr);

// access first element of array
console.log("arr[0]",arr[0]);
console.log("arr[1]",arr[1]);
console.log("arr[2]",arr[2]);
console.log("arr[3]",arr[3]);

// length of array
console.log("arr.length",arr.length);

const arr1 = new Array(1, 2, 3, 4, 5,6,3,45,01,10);
console.log("arr1",arr1);

// array element replace

arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

console.log("arr",arr);

// insert at the beginning
// unshift
arr.unshift(0);
arr.unshift(-1);
console.log("arr",arr);
// insert at the end
// push
arr.push(6);
arr.push(7);
console.log("arr",arr);

// remove from the beginning
// shift
arr.shift();
arr.shift();
arr.shift();
console.log("arr",arr);

// remove from the end
// pop
arr.pop();
arr.pop();
arr.pop();
console.log("arr",arr);
