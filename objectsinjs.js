// Object in JS
// JavaScript object is a non-primitive data-type 
// that allows you to store multiple collections of data.

// object

// JavaScript Object Declaration
// const object_name = {
//     key1: value1,
//     key2: value2
//  }

// Here, an object object_name is defined. 
// Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.
// For example,
// object creation
// const person = { 
//     name: 'John',
//     age: 20
// };
// console.log(typeof person); // object
 
// JavaScript Object Properties
// In JavaScript, "key: value" pairs are called properties.
// For example,
// let person = { 
//     name: 'John',
//     age: 20
// };

// Here, name: 'John' and age: 20 are properties.

// Accessing Object Properties
// 1. Using dot Notation
// 2. Using bracket Notation

const student = {
    firstName: 'ram',
    class: 10,
    rollNo: 1,
    arr: [1, 2, 3, 4, 5],
    truthvalue : true,
    lastName: "kumar",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    marks:{
        maths: 100,
        physics: 90,
    }
};
// console.log("student obj", student);
// console.log("student obj firstName", student.firstName);
// console.log("student obj lastName", student.lastName);
// console.log("student obj fullName", student.fullName());
// console.log("student obj arr", student.arr);
// console.log("student obj rollNo", student.rollNo);

// 2. Using bracket Notation
console.log("student",student);
console.log("student obj firstName", student["firstName"]);
console.log("student obj lastName", student["lastName"]);
console.log("student obj arr", student["arr"]);
console.log("student obj rollNo", student["rollNo"]);

// JavaScript Nested Objects

console.log("phsyics marks", student.marks.physics);
console.log("maths marks", student.marks.maths);

// JavaScript Object Methods
console.log("full name function", student.fullName());