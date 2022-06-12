// JavaScript Arrow Function

// Arrow function is one of the features introduced in the ES6 version of JavaScript. 
// It allows you to create functions in a cleaner way compared to regular functions. 
// For example,

// This function
// function expression
let multi = function(x, y) {
   return x * y;
}

console.log("multi expression function",multi(3, 3));

let multiarrow = (x, y) => {
    console.log(x*y);
}
let multiarrow1 = (x, y) => x*y;
multiarrow(3,4);
// console.log("Arrow FUnction multi", multiarrow(4, 3));
console.log("Arrow FUnction1 multi", multiarrow1(4, 3));


// can be written as
// using arrow functions
// let x = (x, y) => x * y;
// using an arrow function.


// Arrow Function Syntax
// The syntax of the arrow function is:

// let myFunction = (arg1, arg2, ...argN) => {
//     statement(s)
// }
// let myFunction = (arg1, arg2, ...argN) => expression

// Example 1: Arrow Function with No Argument
// If a function doesn't take any argument, 
// then you should use empty parentheses. 
// For example,

let greet = () => console.log('Hello');
greet(); // Hello

// Example 2: Arrow Function with One Argument
// If a function has only one argument, you can omit the parentheses. For example,

let greet1 = x => console.log(x);
greet1('Hello Procoders'); // Hello 

// // You can also dynamically create a function and use it as an expression. For example,
// // let age = 5;
// // let welcome = (age < 18) ?
// //   () => console.log('Baby') :
// //   () => console.log('Adult');

// // welcome(); // Baby

// // Example 4: Multiline Arrow Functions
// // If a function body has multiple statements, you need to put them inside curly brackets {}. For example,

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1); // 12