// JavaScript functions are used to perform operations.
// We can call JavaScript function many times to reuse the code.
/***
    Advantage of JavaScript function
    * Code reusability: We can call a function several times so it save coding.
    * Less coding: It makes our program compact.We don’t need to write many 
      lines of code each time to perform a common task.
    * Function increases readability.

    We can call a function to perform a common task.
***/

// Declaring a Function
// The syntax to declare a function is:

// function nameOfFunction () {
//     // function body   
// }

// nameOfFunction();

// A function is declared using the function keyword.
// The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
// The body of function is written within {}.

// For example,
function greet(){
    console.log("Hello ProCoders");
}

greet();

// Function Parameters
// A function can also be declared with parameters.
// A parameter is a value that is passed when declaring a function.
function greetwithName(name){
    console.log("Hello " + name + ":)");
}

greetwithName("ProCoders");

// Example 2: Function with Parameters
// program to print the text
// declaring a function
function greetName(name) {
    console.log("Hello " + name + ":)");
}

// greetName("ProCoders");

// variable name can be different
// let name = prompt("Enter a name: ");

// // calling function
// greetName(name);
// Note: When a value is passed when declaring a function, 
// it is called parameter. And when the function is called, 
// the value passed is called argument.

// Example 3: Add Two Numbers
// program to add two numbers using a function
// declaring a function
// function add(a, b) {
//     console.log(a + b);
// }

// // calling functions
// add(3,4);
// add(2,9);

// function sub(a,b){
//     console.log(a-b);
// }

// sub(10,9);
// sub(20,3);


// Function Return Value
/***
    The return statement can be used to return the value to a function call.
    The return statement denotes that the function has ended.
    Any code after return is not executed.
    If nothing is returned, the function returns an undefined value.
***/

// // program to add two numbers
// declaring a function
function add(a, b) {
    return a+b;

}

// console.log(add(3, 4));
// take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// display the result
// console.log("The sum of "+number1 + " and "+ number2+" = " + result);


// Function Expressions
// program to find the square of a number
// function is declared inside the variable

function square(side){
    return side*side;
}

console.log(square(5));

const square1 = function square(side){
    return side*side;
}

console.log(square1(15));