/***
JavaScript Logical Operators
Logical operators perform logical operations: AND, OR and NOT.

Logical AND: true if both the operands/boolean values are true,
             else evaluates to false

Logical OR: true if either of the operands/boolean values is true.
            evaluates to false if both are false

***/

// const a = true;
// const b = false;
// const c = true;
// const d = false;

// console.log("AND", a && b);
// console.log("AND on a and c", a && c);

// console.log("OR", a || b);
// console.log("OR on b and d", b || d);

const password = "abc123@11111111";

if( password.length >= 12 && password.includes("@")) {
    console.log("Password is mighty secure");
}else if( password.length >= 8 || password.includes("@")) {
    console.log("Password is long enough");
}else{
    console.log("Password is not long enough");
}

