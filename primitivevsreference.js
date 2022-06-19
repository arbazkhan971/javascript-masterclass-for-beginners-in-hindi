// what are the types of values in javascript?
// primitive values: number, string, boolean, null, undefined
// reference values: object, array, function, date, regex
// primitive values are stored on the stack
// reference values are stored on the heap
// primitive values are copied by value
// reference values are copied by reference

// // Primitive values
// let a = 100;
// let b = a;
// a = 199;
// console.log("value of a",a); // 199
// console.log("value of b",b); // 100

// let c = "Procoders";
// let d = c;
// c = "Please subscribe to our channel";
// console.log("value of c",c); // Please subscribe to our channel
// console.log("value of d",d); // Procoders

// // Reference values

// let e = {name:"Procoders"};
// let f = e;

// f.name = "changed by f variable";
// console.log("value of e",e); // {name: "Please subscribe to our channel"}
// console.log("value of f",f); // {name: "Please subscribe to our channel"}


// let age = 20;

// function increaseAge(age) {
//     age++;
// }
// increaseAge(age);
// console.log("value of age",age);

let ageobj = {age:20};

function increaseAge(ageobj) {
    ageobj.age++;
}
increaseAge(ageobj);
increaseAge(ageobj);
increaseAge(ageobj);
console.log("value of age",ageobj.age);


