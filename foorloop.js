/*
The for loop is very useful in JavaScript
syntax:

for (initialExpression; condition; updateExpression) {
    code to be executed
    for loop body

}
Here,
The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
    If the condition is false, the for loop is terminated.
    If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.
*/

// Display text 5 times
for( let i = 0 ; i < 15; i++ ){
    console.log("Subscribe to Procode!!!");
}

// print each number between 0 and 9
for(let i = 0; i<10; i++){
    console.log("current value of i",i);
}
// print table of 2
for(let i = 2; i<=20; i+=2){
    console.log("current value of i",i);
}

// for loops are useful when working with arrays
const cars = ["BMW", "Audi", "Mercedes", "Ford", "Ferrari", "Porsche"];
for(let i=0; i< cars.length;i++){
    console.log("Car: "+i, cars[i]);
}

// for loops are useful when working with string
const strings = "Hello World";

for(let i=0;i<strings.length;i++){
    console.log("Character: "+i, strings.charAt(i));
}


/*
Often for loops start at 0 rather than 1
because they are so commonly used with arrays.
*/

