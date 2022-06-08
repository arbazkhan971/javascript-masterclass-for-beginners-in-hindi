// Defination of Boolean
// A JavaScript Boolean represents one of two values: true or false.
// Note: If you wrap true or false in a quote, then they are considered as a string.
// true
// false
// "true"
// "false"
// `true`
// `false`
// 'true'
// 'false'

/*** 
    Very often, in programming, you will need a data type that can only have one of two values, like
    YES / NO
    ON / OFF
    TRUE / FALSE
    For this, JavaScript has a Boolean data type. It can only take the values true or false.
    The Boolean data type is a primitive data type.
 ***/

// Everything With a "Value" is True
// // 100
// console.log("100",Boolean(100));
// // 3.14
// console.log("3.14",Boolean(3.14));
// // -15
// // "Hello"
// console.log("Hello",Boolean("Hello"));
// // "false"
// console.log("false",Boolean("false"));
// // 7 + 1 + 3.14
// console.log("7 + 1 + 3.14",Boolean(7 + 1 + 3.14));


//Everything Without a "Value" is False
// 0
// console.log(0,Boolean(0));
// // -0
// console.log(-0,Boolean(-0));
// // ""
// console.log("",Boolean(""));
// // null
// console.log(null,Boolean(null));
// // undefined
// console.log(undefined,Boolean(undefined));
// // NaN
// console.log(NaN,Boolean(NaN));
// // false
// console.log(false,Boolean(false));

const age = 24;

// console.log(age > 18);
// console.log(age < 18);
// console.log( age != 24);
// console.log( age == 24);

const str = "Subscribe to Our Channel";
console.log(str == "Procode");
console.log(str == "subscribe to Our Channel");
console.log(str > "subscribe to Our Channel");
console.log(str < "subscribe to Our Channel");