// localStorage
// The localStorage object allows you to save key/value
// pairs in the browser.

// Local storage is a form of web storage that stores data for a long time.
// This could be a day, a week, or even a year.
// This depends upon the developer’s preference.

// It is important to note that local storage only stores strings so,
// if you wish to store objects, lists, or arrays, you must convert them into a string using JSON.stringify().

// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed,
// and are available for future sessions.


// Storing and retrieving data from localStorage

// setItem()
localStorage.setItem("name","john smith");
localStorage.setItem("age", "30");
localStorage.setItem("random", "random");

// getItem()
console.log("name from localstorage:- ", localStorage.getItem("name"));
console.log("age from localstorage:- ", localStorage.getItem("age"));
console.log("random from localstorage:- ", localStorage.getItem("random"));
// console.log(localStorage.getItem("twk_token_60733954f7ce1827093946b5"))

// update item
localStorage.setItem("name","ProCoders");
localStorage.setItem("age","36");

// // remove item
// localStorage.removeItem("Random key")
// localStorage.removeItem("age")
// localStorage.removeItem("name");

// // clear()
// localStorage.clear();

// Stringify and parse

let arr = [
    {text: "hello 1"},
    {text: "hello 2"},
    {text: "hello 3"},
    {text: "hello 4"},
    {text: "hello 5"},
    {text: "hello 6"},
]

// localStorage.setItem("arr",arr);
// JSON.stringify()
localStorage.setItem("arr",JSON.stringify(arr));

console.log(localStorage.getItem("arr"));
// JSON.parse()
console.log(JSON.parse(localStorage.getItem("arr")));


