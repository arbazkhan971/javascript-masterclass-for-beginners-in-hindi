// Array methods
// forEach
    // The forEach() method executes a provided function once for each array element.
    // Syntax
    // arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    // Parameters
    // callback
    // Function to execute on each element. It accepts between one and three arguments:

const a = [1, 2, 3, 4, 5];
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

console.log("using foreach")
a.forEach((num)=>{
    console.log(num)
})

const b = ["ankit","zaid","irfan"];

b.forEach(
    (w)=>{
        console.log(w)
    }
);

// map

const bchange = b.map((w)=>{{return w.toUpperCase()}})
const bchange1 = b.map((w)=>{return w[0]})
const bchange2 = b.map((w)=>{return w[0] + 1})
console.log("bchange",bchange)
console.log("bchange1",bchange1)
console.log("bchange2",bchange2)
// filter
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const even = c.filter((num)=>{
    return num%2==0;
})
console.log("even",even)

const odd = c.filter((num)=>{
    return num%2!=0;
})
console.log("odd",odd)

const d = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap"
    ,"aaa","aab","aac","aad","aae","aaf","aag","aah","aai","aaj","aak","aal","aam","aan","aao","aap"
    ,"aba","abb","abc","abd","abe","abf","abg","abh","abi","abj","abk","abl","abm","abn","abo","abp"
    ,"aaaa","aaab","aaac","aaad","aaae","aaaf","aaag","aaah","aaai","aaaj","aaak","aaal","aaam","aaan","aaao","aaap"
]


console.log(d)
console.log(d.length);

const with1 = d.filter((word)=>{
    return word.length === 1;
})

console.log("with1",with1)

const with2 = d.filter((word)=>{
    return word.length === 2;
})

console.log("with2",with2)
// reduce

// some
// every
// find
const arr = [1,4,2, 3, 5];
// 2,4
// 2
const found = arr.find((num)=>{
    return num % 3 === 0;
});

console.log("found",found)
// findIndex
const foundIndex = arr.findIndex((num)=>{
    return num % 10 === 0;
})
console.log("foundIndex",foundIndex)

// includes
console.log(
    arr.includes(50)
)
// slice
console.log(arr.slice(3))
// splice
// concat
// join
// reverse
// sort
// toString
// toLocaleString
// toSource