// What is method in the Javascript
// What is function in the Javascript
// What is the difference between a function and a method?
// How to call a method in Javascript

// JavaScript Functions: A function is a block of code written to perform some specific set of tasks.
// We can define a function using the function keyword, followed by Name and optional parameters.
// Body of function is enclosed in Curly braces.

/*
    define a function
    function functionName(parameters) {
        // Content
    }

    invoke a function:
    functionName(arguments);


*/

// Features:
// The function is executed when something calls/invokes it.
// The name may contain letters, digits, dollar signs, underscore.
// Parameters are listed inside round parenthesis after the name of the function.
// Arguments are values a function receives when it is invoked.


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2));

function add(a,b){
    return a+b;
}
console.log("add functions result",add(2,2));

// JavaScript Methods: 
// A JavaScript method is a property of an object that contains a function definition.
// Methods are functions stored as object properties. Object method can be accessed with the following 
/***
Syntax:

        object = {
            methodName: function() {
                // Content
            }
        };

        object.methodName()
***/

// Features:
// Actions that can be performed on objects are what we term JavaScript methods.
// The objects can also be called without using parenthesis.
// This refers to the owner object in a method.

let obj1 = {
    name: "John smith",
    age: 30,
    sayHello: function() {
        console.log("Hello " + this.name);
    }
}

obj1.sayHello();