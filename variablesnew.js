console.log("hello i am here");
console.log("hello i am here");
console.log("hello i am here");
console.log("see me here");

// var , const, let

var a = 100;
console.log("a before " + a); // 100
a = a+10;
console.log("a after " + a); // 110 

// let b = 200;
// console.log("b before " + b); // 200
// b = b+10;
// console.log("b after " + b); // 210

const c = 300;
console.log("c before " + c); // 300

// + number and string === string
// + number and number === number
// + string and string === string

// - number and string === NaN
// - number and number === number
// - string and string === NaN

// * number and string === NaN
// * number and number === number
// * string and string === NaN

// / number and string === NaN
// / number and number === number
// / string and string === NaN

// % number and string === NaN
// % number and number === number
// % string and string === NaN

// ++ number and string === NaN
// ++ number and number === number
// ++ string and string === NaN

// -- number and string === NaN
// -- number and number === number
// -- string and string === NaN

// == number and string === true
// == number and number === true
// == string and string === true

// === number and string === false



var a = 10;
console.log("a = "+a+1);
console.log("a = "+(a+1));

console.log("a = "+a-1, "a = "+(a-1), "a = "+a*1, "a = "+(a*1), "a = "+a/1, "a = "+(a/1), "a = "+a%1, "a = "+(a%1));

// functional scope of var
// block scope of let and const


function blockf(){
    var a = 10;
    console.log("a = " + a);
    if(a < 20){
        const b = 20;
        console.log("b = " + b);
    }
    // console.log("b = " + b);
}

blockf();

console.log("a = " + a);
const b = 20;
console.log("b = " + b);

function blockf1(){
    var d = 10;
    console.log("a = " + a);
    a = a+10;
    if(d < 20){
        const e = 20;
        console.log("e = " + e);
    }
    console.log("b = " + b); // isski value kitni hogi
}
blockf1();
console.log("d = " + d); // d ka value kitna hoga
console.log("a = " + a);