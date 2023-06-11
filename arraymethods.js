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
const arr = [1,4,2, 3, 5, 6, 7, 8, 9, 10, 11];
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
// [1,2,3,4,5]
// [0,1,2,3,4]
// slice(3) => [3,4,5]
// slice(4) => [4,5]
// slice(2) => [2,3,4,5]
// slice(1) => [0,1,2,3,4,5]
// slice(1,3) => [1,2]
// slice(1,4) => [1,2,3]
const arr1 = [1,4,2, 3, 5, 6, 7, 8, 9, 10, 11];
// reverse
// [11,10,9,8,7,6,5,4,3,2,1]
// [0,1,2,3,4,5,6,7,8,9,10]
console.log("slice 3",arr1.slice(3))
console.log("slice 4",arr1.slice(4))
console.log("slice 2",arr1.slice(2))
console.log("slice 1",arr1.slice(1))
console.log("slice 0",arr1.slice(0))
console.log("slice 1,3",arr1.slice(1,3)) // 4,2
console.log("slice 1,4",arr1.slice(1,4)) // 4,2,3
console.log("slice 1,5",arr1.slice(1,5)) // 4,2,3,5
console.log("slice 1,6",arr1.slice(4,8)) //5,6,7,8
// slice(n) => [n,n+1,n+2,n+3,n+4,n+5,n+6,n+7,n+8,n+9,n+10]
// slice(n,m) => [first se start , last se pehle tak]
// concat
const arr4 = [1,2,3,4,5];
const arr5 = [6,7,8,9,10];
const arr6 = [11,12,13,14,15];
const arr7 = [16,17,18,19,20];
const arr8 = [21,22,23,24,25];
const arr9 = [26,27,28,29,30];
console.log(
    "concat arr",
    arr4.concat(arr5,arr6,arr7,arr8,arr9)
)

// join
const arr10 = [1,2,3,4,5];
console.log("arr10",arr10)
console.log("join",arr10.join("%"))
console.log(
    "join",
    arr10.join(" ")
)
console.log(
    "join",
    arr10.join("")
)
console.log(
    "join",
    arr10.join("a")
)
console.log(
    "join",
    arr10.join("b")
)
// reverse
console.log("reverse",arr1.reverse())
const arr3 = [1,2,3,4,5,6,7,8,9,10,11];
console.log("reverse",arr3.reverse())
// sort
const arr2 = [43,2,1,4,5,6,7,4,8,9,10,11,1];
// ascending
[1,1,2,4,4,5,6,7,8,9,10,11,43]
// descending
[43,11,10,9,8,7,6,5,4,4,2,1,1]
console.log("arr2",arr2)
// 43-11 = 32
// 11-10 = 1
// 10-9 = 1
// 9-8 = 1
// 8-7 = 1
arr2.sort((a,b)=>{
    return a-b;
});
console.log("arr2 sorting ascending",arr2)
arr2.sort((a,b)=>{
    return b-a;
}); 
console.log("arr2 sorting descending",arr2)
// toString
// toLocaleString
// toSource