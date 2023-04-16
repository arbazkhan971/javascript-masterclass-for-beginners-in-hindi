// what is variables in javascript
// var, let, const
// functional scope vs block scope


// var a = 100;
// console.log("a = " + a);
// a = a+10;
// console.log("a = " + a);
// a = a+20;
// console.log("a = " + a);
// a = a+30;
// console.log("a = " + a);


// // functional scopre of var

// function varcheck(){
//     var b = 10;
//     console.log("b = " + b);
// }

// varcheck();

// console.log("outside function b = " + b);


// LET

// let a = 100;

// console.log("a = " + a);

// // let a = 200;
// // console.log("redfination of a = " + a);
// a = a+10;
// console.log("a = " + a);
// a = a+20;
// console.log("a = " + a);
// a = a+30;
// console.log("a = " + a);

// const 

// const a = 100;
// console.log("a = " + a);

// // // redefiantion of a is not allowed
// // const a = 200;
// // console.log("redfination of a = " + a);


// // reassignment of a is not allowed

// a = 200;
// console.log("reassignment of a = " + a);


// Block scope

function blockscopre(){
    let b = 10;
    console.log("b = " + b);
    if( b < 20){
        let c = 20;
        var cvar = 25;
        const constc = 30
        console.log("c = " + c);
        console.log("cvar = " + cvar);
        console.log("constc = " + constc);
    }
    // console.log("outside if c = " + c);
    // console.log("outside if cvar = " + cvar);
    console.log("outside if constc = " + constc);
}

blockscopre();

// functional scope vs block scope