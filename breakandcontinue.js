/***
Break in JS
The break statement is used to terminate the loop immediately when it is encountered.
The syntax of the break statement is:
break;

Continue in JS
The continue statement is used to skip the current iteration of the loop and the 
control flow of the program goes to the next iteration.
The syntax of the continue statement is:
continue;
***/

// Example 1

// for(let i = 1; i <= 10; i++) {
//     if( i === 5){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++) {
//     if( i === 5){
//         continue;
//     }
//     console.log(i);
// }

for(let i = 1; i <= 20; i++) {
    if( i === 15){
        break;
    }
    if( i === 9){
        continue;
    }
    console.log(i);
}