console.log("Hello World from function1.js")

function printHello(a,b) {
    return a+b;
}

// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// console.log("Hello World from function1.js 1")
// 
console.log(printHello(3,4))
const c = printHello(3,4);
console.log(c);
printHello(3,4);
function printHello1(a,b) {
    console.log(a+b);
}

printHello1(3,9);



// step 1
// function declare
// type 1
function subtract(a,b) {
    console.log(a-b);
}

// type 2
function subtract1(a,b) {
    return a-b;
}
// type 3
const sub = function(a,b) {
    return a-b;
}
console.log("type 3 function",sub(20,9));

// type 4
const sub1 = (a,b) => {
    return a-b;
}
console.log("type 4 function",sub1(20,9));

// step 2
// function call
// type 1
subtract(10,9);

// type 2
console.log(subtract1(10,9));
const d = subtract1(10,9);
console.log(d);

// square
// type 1
function square(a) {
    console.log(a*a);
}
// type 2
function square1(a) {
    return a*a;
}

// type 3
const square2 = function(a) {
    return a*a;
}
console.log("type 3 function square",square2(20));

// type 4
const square3 = (a) => {
    return a*a;
}
console.log("type 4 function square",square3(20));

// call 1
console.log("calling type 1");
square(5);

// call 2
console.log("calling type 2");
console.log(square1(5));
const e = square1(5);
console.log(e);

// division
// type 1
function division(a,b) {
    console.log(a/b);
}
// type 2
function division1(a,b) {
    return a/b;
}

// call 1
console.log("calling type 1 division");
division(10,2);

// call 2
console.log("calling type 2 division");
console.log(division1(10,2));
const f = division1(10,2);
console.log(f);

// multiplication
// type 1
function multiplication(a,b) {
    console.log(a*b);
}
// type 2
function multiplication1(a,b) {
    return a*b;
}

// call 1
console.log("calling type 1 multiplication");
multiplication(10,2);

// call 2
console.log("calling type 2 multiplication");
console.log(multiplication1(10,2));
const g = multiplication1(10,2);
console.log(g);
// modulus
// type 1
function modulus(a,b) {
    console.log(a%b);
}
// type 2
function modulus1(a,b) {
    return a%b;
}

// call 1
console.log("calling type 1 modulus");
modulus(10,2);

// call 2

console.log("calling type 2 modulus");
console.log(modulus1(10,2));
const h = modulus1(10,2);
console.log(h);

// power
// type 1
function power(a,b) {
    console.log(a**b);
}
// type 2
function power1(a,b) {
    return a**b;
}

// call 1
console.log("calling type 1 power");
power(10,2);

// call 2
console.log("calling type 2 power");
console.log(power1(10,2));
const i = power1(10,2);
console.log(i);

// square root
// circle area
// rectangle area
// triangle area
// type 1
function triangleArea(base,height) {
    console.log(0.5*base*height);
}

// type 2
function triangleArea1(base,height) {
    return 0.5*base*height;
}

// call 1
console.log("calling type 1 triangleArea");
triangleArea(10,2);

// call 2
console.log("calling type 2 triangleArea");
console.log(triangleArea1(10,2));
const j = triangleArea1(10,2);
console.log(j);

// cube
// type 1
function cube(a) {
    console.log(a*a*a);
}


// multiply
// type 1
function multiply(a,b,c,d) {
    console.log(a*b*c*d);
}

// type 2
function multiply1(a,b,c,d) {
    return a*b*c*d;
}

// call 1
console.log("calling type 1 multiply");
multiply(10,2,3,4);

// call 2
console.log("calling type 2 multiply");
console.log(multiply1(10,2,3,4));
const k = multiply1(10,2,3,4);
console.log(k);