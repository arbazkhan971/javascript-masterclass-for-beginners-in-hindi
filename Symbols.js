// JavaScript Symbol
// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.
// For example,

// Creating Symbols
// Symbol
const x = Symbol('Hello world');
console.log(x);
console.log(typeof x);

const str = Symbol("string is here");
console.log(str);
console.log(typeof str);
// Access Symbol Description
console.log(x.description);
console.log(str.description);

// Add Symbol as an Object Key
let obj = {
    name: "random obj"
}
obj[x] = "random value";
console.log(obj);

console.log(obj.name);
console.log(obj[x]);

// two symbols with the same description are not the same symbol

const s1 = "hello";
const s2 = "hello";

console.log(s1 === s2);

const symbols1 = Symbol("hello");
const symbols2 = Symbol("hello");
console.log(symbols1 === symbols2);