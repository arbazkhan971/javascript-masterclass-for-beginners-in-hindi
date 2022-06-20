// Rest parameters
// When the spread operator is used as a parameter,
// it is known as the rest parameter.
// it is also denoted by ...


const arr = [1,2,3,4,91,01,9292];

function restop(...args){
    return args.reduce((acc,curr)=> acc+curr,0);
}   

console.log(restop(...arr));

// Spread operator vs Rest parameter
// The spread operator is used to expand an array into multiple arguments.

// Spread operator
const arr1 = [1,2,3,4,91,01,9292];
console.log( ...arr1);


// rest operator

function sum(...args){
    return args.reduce((acc,curr)=> acc+curr,0);
}

console.log(sum(...arr1));