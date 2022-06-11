// An array is a special variable, which can hold more than one value;
// An array is an object that can store multiple values at once. 
// For example,
const cars = ["Saab", "Volvo", "BMW", "Ford"];
console.log("cars",cars);
console.log("typeof cars",typeof cars);
// The above code will print out the following:
// The above code creates an array called cars, and stores three values in it.
// The array is then printed to the console.


// Create an Array
// You can create an array using two ways:
// 1. Using an array literal
const array1 = ["eat", "sleep"];
console.log("array1",array1);
// 2. Using the new keyword
const array2 = new Array("eat", "sleep");
console.log("array2",array2);

const myList = [ ];
console.log("myList",myList);
const numberArray = [ 2, 4, 6, 8];
console.log("numberArray",numberArray);
const stringArray = [ 'eat', 'work', 'sleep'];
console.log("stringArray",stringArray);
const newData = ['work', 'exercise', 1, true];
console.log("newData",newData);
const newData2 = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
console.log("newData2",newData2);

// Access Elements of an Array
console.log(numberArray[0]);
console.log("numberArray[1]",numberArray[1]);

// Add an Element to an Array
// You can use the built-in method push() and unshift() to add elements to an array.
// push to add at the end
// unshift to add at the beginning
let myArray = [1, 2, 3];
myArray.push(4);
console.log("myArray",myArray);
myArray.unshift(0);
console.log("myArray",myArray);


// Change the Elements of an Array
// You can also add elements or change the elements by accessing 
// the index value.
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log("dailyActivities",dailyActivities); // ['eat', 'sleep', 'exercise']

dailyActivities[0] = 'work';
console.log("dailyActivities",dailyActivities); // ['work', 'sleep', 'exercise']
// Remove an Element from an Array
// You can use the pop() method to remove the last element from an array.
// The pop() method also returns the returned value. For example,
console.log("myArray before pop",myArray);
myArray.pop();
myArray.pop();
myArray.pop();
console.log("myArray after pop",myArray);


// Array length
console.log("myArray length",myArray.length);
console.log("cars length",cars.length);
console.log("stringArray length",stringArray.length);





