// Numbers in Javascript
// Numbers are primitive data types.
// JavaScript has only one type of number. 
// Numbers can be written with or without decimals.
let x = 30;    // A number with decimals
let y = 3;       // A number without decimals

console.log("x",x);
console.log("y",y);

console.log(typeof x, typeof y);

console.log(x*2);
console.log(x+10);
// + - * / %
console.log("+",x+y);
console.log("-",x-y);
console.log("*",x*y);
console.log("/",x/y);
console.log("%",x%y);

console.log(11%3);


// You can use exponential notation e to include too large or too small numbers. For example,
// 1e3 is equal to 1000.
console.log(1e4);
console.log(1e-5);

// + Operator with Numbers
const a3 = 4 + 9;
console.log("a3",a3); // 13

const a4 = '4' + 9;
console.log("a4",a4); 

const a5 = '4' - 2;
console.log("a5",a5); 

const a6 = '4' / 2;
console.log("a6",a6); 

const a7 = '4' * 2;
console.log("a7",a7); 

// JavaScript NaN
// Not a Number (NaN)
// NaN is a special value that is used to represent an error.
const a8 = 4 + 'hello';
console.log("a8",a8); // NaN

// Precision Problems
// Operations on floating-point numbers results in some unexpected results. For example,
const a9 = 0.1 + 0.2;
console.log(a9); 

// toFixed() method
console.log(a9.toFixed(40)); // 0.30