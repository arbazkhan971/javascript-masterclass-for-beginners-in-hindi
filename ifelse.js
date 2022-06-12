/***
    if else in js
    if...else statements are used to execute different code blocks based on different conditions.
    if (condition) {
        // block of code if condition is true
    } else {
        // block of code if condition is false
    }
***/


// const age = prompt("Enter your age");
// if( age > 18){
//     console.log("You are old enough to vote!");
// }else{
//     console.log("You are not old enough to vote!");
// }

// const password = prompt("Enter your password");
// if( password.length >= 8){
//     console.log("Password is long enough!");
// }else{
//     console.log("Password is not long enough!");
// }

// const age = prompt("Enter your age");

// if( age > 18){
//     console.log("You are old enough to vote!");
// }else if( age > 16){
//     console.log("Wait for few years then come and vote");
// }else{
//     console.log("You are not old enough to vote!");
// }


const password = prompt("Enter your password");
if( password.length >= 12){
    console.log("Password is long enough!");
}else if( password.length >= 8){
    console.log("Password is superstrong strong!");
}else{
    console.log("Password is not long enough!");
}
