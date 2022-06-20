// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// The new Set() Method
const letters = new Set(['a', 'b', 'c']);
console.log(letters);
console.log(typeof letters);
// const arr = ['a', 'b', 'c','a', 'b', 'c'];
// console.log(arr);

// add()

letters.add('d');
letters.add('d');
letters.add('e');
letters.add('f');
letters.add(19);

console.log(letters);

// has()
console.log(letters.has(0000));

// values()
console.log(letters.values());

for(let v of letters){
    console.log("value of v is: ", v);
}

// delete()

letters.delete('a');
letters.delete(19);
console.log(letters);

// clear()
// letters.clear();
// console.log(letters);

// size()
console.log(letters.size);
