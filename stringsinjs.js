/***
Defination:- Strings in JavaScript
A JavaScript string stores a series of characters like "John Doe".
In Javascript, a string can be declared using "" or ''.
A string can be any text inside double or single quotes: "John Doe" or 'John Doe'.
String indexes are zero-based:
The first character is in position 0, the second in 1, and so on.
***/

// You can use single or double quotes:
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC61';  // Single quotes
let carName3 = `Volvo XC62`;  // Backticks

console.log("carName1: " + carName1);
console.log("carName2: " + carName2);
console.log("carName3: " + carName3);


console.log("type carName1: " + typeof carName1);
console.log("type carName2: " + typeof carName2);
console.log("type carName3: " + typeof carName3);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// let answer11 = "It's alright";
// let answer12 = "He is called "Johnny"";

// Escape Character
let answer11 = 'It\'s alright';
let answer12 = "He is called \"Johnny\"";
console.log("answer11: " + answer11);
console.log("answer12: " + answer12);

// String Concatenation
const first_name = "Subscribe";
const last_name = "to ProCode";

console.log("String Concatenation: " + first_name +" "+ last_name);

// String Length
// To find the length of a string, use the built-in length property:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let email = "subscribe@procode.com";
console.log("text length: " + text.length);
console.log("email length: " + email.length);
console.log("answer11 length: " + answer11.length);
console.log("first_name length: " + first_name.length);

// Extracting String Parts
for(let i = 0; i < email.length; i++) {
    console.log(i,email[i]);
}

// String Methods
// They are the function belongs to specific string object.
// 1 - .toUpperCase(); && .toLowerCase();
const text1 = "Hello World";
console.log("text1: " + text1);
console.log("text1 toUpperCase: " + text1.toUpperCase());
console.log("text1 toLowerCase: " + text1.toLowerCase());
// 2 - .concat();
const text2 = "Hello";
const text3 = "world";
const text4 = text2.concat(" ", text3, " ","!" ," ","Procoders");
console.log("text4: " + text4);

// 3 - .indexOf(); && .lastIndexOf();
console.log("email indexOf s: " + email.indexOf("s"));
console.log("email lastIndexOf s: " + email.lastIndexOf("s"));
console.log("email indexOf !: " + email.indexOf("!"));
console.log("email lastindexOf !: " + email.lastIndexOf("!"));
// 4 - .charAt();
console.log("email charAt 1: " + email.charAt(1));
// 5 - .charCodeAt();
console.log("email charCodeAt 0: " + email.charCodeAt(0));
// 6 - .substring();
// string.substring(start, end)
console.log("email substring 0-8: " + email.substring(0,8));
console.log("email substring 8: " + email.substring(2));
// 7 - .slice();
// string.slice(start, end)
console.log("email slice 0-8: " + email.slice(0,8));
console.log("email slice 8: " + email.slice(2));
console.log("email slice -8: " + email.slice(-8));
console.log("email slice -1: " + email.slice(-4));
// 8 - .search();
// string.search(searchValue)
console.log("email search s: " + email.search("m"));
console.log("email search !: " + email.search("!"));

// 9 - .split();
// string.split(separator, limit)
console.log("email split: " + email.split("@"));
console.log("tyepof email split: " + typeof email.split("@"));
const email2 = "subscribe@toprocode@procode@procode.com";
console.log("email2 split: " + email2.split("@"));
// 10 - .replace();
// string.replace(searchValue, newValue)
console.log("email replace s: " + email.replace("s","$"));
console.log("email replace s: " + email.replace("m","()"));
// 11 - .trim();
// string.trim()

const name = "  Subscribe to ProCode   ";
console.log("name: " + name);
console.log("name trim: " + name.trim());



