console.log("hello i am here");
console.log("hello i am here");
console.log("hello i am here");
console.log("see me here");

// var , const, let

var a = 100;
console.log("a before " + a); // 100
a = a+10;
console.log("a after " + a); // 110 

let b = 200;
console.log("b before " + b); // 200
b = b+10;
console.log("b after " + b); // 210

const c = 300;
console.log("c before " + c); // 300
c = c+10;
console.log("c after " + c); // 310

// + number and string === string
// + number and number === number
// + string and string === string

// - number and string === NaN
// - number and number === number
// - string and string === NaN

var a = 200;
console.log("a before " + a); // 100
a = a+10;
console.log("a after " + a); // 110 

// let b = 300;
// console.log("b before " + b); // 200
// b = b+10;
// console.log("b after " + b); // 210

const c = 400;
console.log("c before " + c); // 300
c = c+10;
console.log("c after " + c); // 310
