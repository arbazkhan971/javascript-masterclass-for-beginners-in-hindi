/***
The JavaScript switch statement is used in decision making.
The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.
The syntax of the switch statement is:

switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}

The switch statement evaluates a variable/expression inside parentheses ().

If the result of the expression is equal to value1, its body is executed.
If the result of the expression is equal to value2, its body is executed.
This process goes on. If there is no matching case, the default body executes.
***/

const number = prompt("Enter a number between 1-5");

switch(number){
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    default:
        console.log("Invalid number");
        break;
}

