console.log("Loops in JS")

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log(cars);
cars.forEach(element => {
    console.log(element);
});

console.log("For loop")
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// 4 < (6-3) 4 < 3
// 3 < 3
// 2 < 3
for(let i = 2; i < (cars.length - 3); i = i + 2){
    console.log(i)
}

for(let i = 0; i < (cars.length); i++){
    console.log(i)
}

for(let i = 0; i < (cars.length); i++){
    console.log(cars[i])
}

console.log("While loop")
let i = 0;
while (i < cars.length-1) {
    console.log(cars[i]);
    console.log(i)
    i++;
}

console.log("Do while loop")
let i1 = 0;
do {
    console.log(cars[i1]);
    console.log(i1)
    i1++;
}
while (i1 < cars.length);
for( let i in cars){
    console.log(i)
    console.log(cars[i])
}
console.log("For of loop")
for (let i of cars) {
    console.log(i);
}

