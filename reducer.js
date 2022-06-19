// Javascript Array reduce()
// The reduce() method executes a reducer function on each element of the array and 
// returns a single output value.

// reduce() Syntax
// The syntax of the reduce() method is:
// arr.reduce(callback(accumulator, currentValue), initialValue)
// Here, arr is an array.

// concatenating String
const strin = ["Subscribe ", "to ", "the ", "ProCode"];
console.log(strin.reduce((acc,curr) => acc+curr,""));

// Sum of all the number in the array
const number = [-10,1,2,3,4,5,6,7,8,9,10];

console.log(number.reduce((acc,curr) => acc+curr,0));

// Average of all the number in the array
console.log(number.reduce((acc,curr) => acc+curr,0)/number.length);
// Finding Maximum of array
// console.log(number.reduce((acc,curr) => acc>curr?acc:curr,0));
console.log(number.reduce((acc,curr) => Math.max(acc,curr),0));
// Finding Minimum of array
console.log(number.reduce((acc,curr) => Math.min(acc,curr),0));

// Subtracting Numbers in Array
console.log(number.reduce((acc,curr) => acc-curr,0));