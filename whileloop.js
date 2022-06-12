/***
JavaScript while Loop
The syntax of the while loop is:

while (condition) {
    // body of loop
}

Here,
A while loop evaluates the condition inside the parenthesis ().
If the condition evaluates to true, the code inside the while loop is executed.
The condition is evaluated again.
This process continues until the condition is false.
When the condition evaluates to false, the loop stops.

***/

// Display text 5 times
let i = 0;
while(i < 5){
    console.log("Subscribe to Procode!!!"+ i);
    i++;
}
// print each number between 0 and 9
let j = 0;
while(j < 10){
    console.log("current value of j",j);
    j++;
}

// print table of 2
let k = 2;
while(k<=20){
    console.log("current value of k",k);
    k+=2;
}

// while loops are useful when working with arrays
const cars = ["BMW", "Audi", "Mercedes", "Ford", "Ferrari", "Porsche"];
let l = 0;
while( l < cars.length){
    console.log("Car: "+l, cars[l]);
    l++;
}

// while loops are useful when working with string
const strings = "Subscribe to Procode";
let m = 0;
while( m < strings.length){
    console.log("Character: "+m, strings.charAt(m));
    m++;
}