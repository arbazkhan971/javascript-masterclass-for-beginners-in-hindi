/***
JavaScript Type Conversions

In programming, type conversion is the process of converting data of one type to another. 
For example: converting String data to Number.

There are two types of type conversion in JavaScript.
* Implicit Conversion - automatic type conversion
In certain situations, JavaScript automatically converts one data type to another (to the right type). 
This is known as implicit conversion.

* Explicit Conversion - manual type conversion
The type conversion that you do manually is known as explicit type conversion.

***/

const str = "123";
const bool = true;

// 1. Convert to Number Explicitly
// To convert numeric strings and boolean values to numbers, 
// you can use Number(). For example,
// console.log(Number(str)); // 123
// console.log(Number(null)); // 0
// console.log(Number("random string")); 
// console.log(Number(undefined));
// console.log(Number("1239e4"));
// console.log(Number("-201"))
// // 3. Convert to Boolean Explicitly
// console.log(Number(bool));

// console.log("false",Number(false));
// 2. Convert to String Explicitly

console.log(String(233)); // "233"
console.log(String(123e4)); // "1230000"

console.log(String(true)); // "true"
console.log(String(false)); // "false"

// 3. Convert to Boolean Explicitly

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(192929)); // true
console.log(Boolean(NaN)); 


console.log(Boolean(null)); // false
console.log(Boolean("random")); // true