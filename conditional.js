//conditionals in js..
//1. if statement
let age = 18;
if(age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//you can also use logical operators in if statement
let num = 10;   
if(num > 0 && num < 20) {
    console.log("The number is between 0 and 20.");
}

//switch statement
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("It's not Monday or Tuesday.");
}