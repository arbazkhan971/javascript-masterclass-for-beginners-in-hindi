// JavaScript Array sort()
// The sort() method sorts the items of an array in 
// a specific order (ascending or descending).

// sort() Syntax
// The syntax of the sort() method is:
// arr.sort(compareFunction)
// Here, arr is an array.
// compareFunction is a function that compares two items of an array.
// Any compareFunction has the following syntax:
// function (a, b){
//     // sorting logic
//     // return a Number 
// }

const str = ["c", "A","Z","d","b", "e","a"];
console.log(str.sort());

const numbers = [5,6,7,8,2,3,49,1,10];
console.log(numbers.sort());
console.log(numbers.sort((a,b)=>{
    return a-b;
}))

const obj = [
    {name:"Procoders 1", age:20},
    {name:"Pro 2", age:30},
    {name:"pro 3", age:40},
    {name:"pro 4", age:50},
    {name:"pro 5", age:60},
]

console.log(obj.sort((a,b)=>{

    return a.age-b.age;

}))

console.log(numbers.sort((a,b)=>{
    return b-a;
}))