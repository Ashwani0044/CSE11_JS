// Functions in js.
//1. function declaration
function sayHello() {
   alert("Hello World!");
}
sayHello();

//2. function expression
let sayHi = function() {
    console.log("Hi!");
}
sayHi();

//3. arrow function
let greet = () => {
    console.log("Greetings!");  
}

// why do we use arrow function?    
//1. it is more concise than function declaration and function expression.
//2. it does not have its own 'this' keyword, it inherits 'this' from the parent scope.                         

//4. function with parameters
function add(a, b) {
    return a + b;
}