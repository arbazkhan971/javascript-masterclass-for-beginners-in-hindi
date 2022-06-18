// What is callback function
// Function vs callback function
// what are the benefits of using callback function
// Need of callback function in asynchronous programming


// A function is a block of code that performs a certain task when called.
// For example,
// function
// function greet(name) {
//     console.log('Hi' + ' ' + name);
// }

// greet('Procoders'); // Hi Peter

// Callback Function
// In JavaScript, you can also pass a function as an argument to a function.
// This function that is passed as an argument inside of another function is called a callback function.
// For example,

// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('ProCoders', callMe);


// Benefit of Callback Function
// The benefit of using a callback function is that you can wait 
// for the result of a previous function call and then execute another function call.

// Need of Callback Functions
// We need callback functions because many JavaScript actions are asynchronous,
// which means they don't really stop the program (or a function) from running until they're completed,
// as you're probably used to. Instead, it will execute in the background while the rest of the code runs.

//  program that shows the delay in execution

function greet(name, callback) {
    console.log('Hello'+name);
    callback();
}
// callback function
function sayName() {
    console.log('Hello from callback function');
}

// calling the function
// setTimeout(greet, 2000);
// greet();

// setTimeout(greet,3000);
// sayName('Procoders');

setTimeout(greet,3000, 'Procoders', sayName);