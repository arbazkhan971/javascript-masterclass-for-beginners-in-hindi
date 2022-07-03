// What is Asynchronous Javascript
// What is the difference between synchronous vs Asynchronous JS
// What are the pitfalls of using Synchronous JS

// Synchronous:
// - In synchronous operations tasks are performed one at a time and only when one 
// is completed, the following is unblocked. In other words, you need to wait for a
// task to finish to move to the next one.

// Sync code Examples

// function func(){
//     console.log("from Inside synchronous functions - t2");
// }
// // t1
// console.log("Start - t1");

// // t2
// func();

// //t3
// console.log("End - t3");


// Asynchronous:
// - In asynchronous operations, you can move to another task 
// before the previous one finishes.

// Asynchronous Code Examples


// // AT1
// console.log("start - at1 ");

// // AT2
// setTimeout(()=>{
//     console.log("from inside set timeout - at2");
// },5000);

// // AT3
// console.log("End - at3");

function mockdbforuser(){
    setTimeout(
        ()=>{
            return {
                username: "random",
                password: "password"
            } 
        },5000
    )
    // return {
    //                 username: "random",
    //                 password: "password"
    //     }
}

// const userdetailfromdb = mockdbforuser();
// console.log(userdetailfromdb);

// go to macdonald 
// order burger to waiter
// waiter notes down the order
// chef gets the order detail
// order preparation will be started chef
// order is prepared
// waiter gets the prepared order
// you get the order from waiter

// 3 sec
// function gotomacdonald(){
//     setTimeout(()=>{
//         console.log("going to macdonald");
//         setTimeout(()=>{
//             console.log("ordering burger");
//             setTimeout(()=>{
//                 console.log("Waiter takes the order");
//                 setTimeout(()=>{
//                     console.log("chef gets the order");
//                     setTimeout(()=>{
//                         console.log("Your order is getting prepared");
//                         setTimeout(()=>{
//                             console.log("your order is ready");
//                         },1000);
//                     },3000);
//                 },5000);
//             },1000);
//         },2000);
//     },3000);

// }

// // 2 sec
// function orderfood(orderfood){
//     setTimeout(()=>{
//         console.log("ordering burger");
//     },2000);
//     orderfood();
// }

// // 1 sec
// function waitertakingorder(){
//     setTimeout(()=>{
//         console.log("Waiter takes the order");

//     },1000);
// }

// // 5 sec
// function chefgetsorder(){
//     setTimeout(()=>{
//         console.log("chef gets the order");
//     },5000);
// }

// // 3 sec
// function orderpreparation(){
//     setTimeout(()=>{
//         console.log("Your order is getting prepared");
//     },3000);
// }

// // 1 sec
// function orderisready(){
//     setTimeout(()=>{
//         console.log("your order is ready");
//     },1000);
// }

// gotomacdonald();
// orderfood();
// waitertakingorder();
// chefgetsorder();
// orderpreparation();
// orderisready();

// Promises
// In JavaScript, a promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.
// 1) Pending
// 2) Fulfilled
// 3) Rejected

// Create a Promise
// To create a promise object, we use the Promise() constructor.
// let promise = new Promise(function(resolve, reject){
//         //  do something
// });

// let promise = new Promise((resolve,reject)=>{
//     // do something
// })

// The Promise() constructor takes a function as an argument. 
// The function also accepts two functions resolve() and reject().

function checkeven(number){
    return new Promise((resolve,reject)=>{
        if( number%2 === 0){
            resolve("Yes, it's Even No.");
        }else{
            reject("No, it is Not Even No.");
        }
    })
}

// const result = checkeven(4);
// console.log(result);
// checkeven(16).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("hello from finally");
// })


// If the promise returns successfully, the resolve() function is called.
// And, if an error occurs, the reject() function is called.

// JavaScript Promise Chaining
// then()
// catch()
// finally

// https://anapioficeandfire.com/api/characters/{charvalue}

// fetch(`https://anapioficeandfire.com/api/characters/199`).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })


// Javscript async/await
// We use the async keyword with a function to represent that the function is an asynchronous function. 
// The async function returns a promise.

// The syntax of async function is:
// async function name(parameter1, parameter2, ...paramaterN) {
//     // statements
// }
// Here,
// name - name of the function
// parameters - parameters that are passed to the function


// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("isnide promise");
//         resolve("Done from promise");
//     },2000);
// })

// async function getname(){
//     console.log("Inside async")
//     const result = await promise;
//     console.log(result);
// }

// console.log(getname());

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// async function getfetch(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/todos/11');
//     res = await res.json();
//     console.log(res);
// }

// getfetch();


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

async function dummjson(){
    try{
        let res = await fetch("https://dummyjson.com/products/111111");
        res = await res.json();
        console.log(res);
    }catch(error){
        console.log(error);
    }

}

dummjson();