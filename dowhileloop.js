/*
`do while` is essentially like the basic `while` statement
except for one key difference, the body is always executed
at least once.

Syntax:
do {
	body
} while (condition);

This is generally only useful if you need the body to run
at least once, before the condition is checked.
*/

// Display text 5 times
// let i = 0;
// while(i < 5){
//     console.log("Subscribe to Procode!!!"+ i);
//     i++;
// }

let i = 0;
do{
    console.log("Subscribe to Procode!!!"+ i);
    i++;
}while(i < 5);

// print each number between 0 and 9
// let j = 0;
// while(j < 10){
//     console.log("current value of j",j);
//     j++;
// }
let j = 0;
do {
    console.log("current value of j",j);
    j++;
}while(j<10);

// print table of 2
let k = 2;
// while(k<=20){
//     console.log("current value of k",k);
//     k+=2;
// }

do {
    console.log("current value of k",k);
    k+=2;
}while(k<=20);

// do while loops are useful when working with arrays
const cars = ["BMW", "Audi", "Mercedes", "Ford", "Ferrari", "Porsche"];
let l = 0;
// while( l < cars.length){
//     console.log("Car: "+l, cars[l]);
//     l++;
// }

do{
    console.log("Car: "+l, cars[l]);
    l++;
}while(l < cars.length);

// // while loops are useful when working with string
// const strings = "Subscribe to Procode";
// let m = 0;
// while( m < strings.length){
//     console.log("Character: "+m, strings.charAt(m));
//     m++;
// }