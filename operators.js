//Arithmetic operators
let a=10;
let b=5;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

//Comparison operators
console.log("a > b =", a > b);
console.log("a < b =", a < b);
console.log("a >= b =", a >= b);
console.log("a <= b =", a <= b);
console.log("a == b =", a == b);
console.log("a === b =", a === b);
console.log("a != b =", a != b);
console.log("a !== b =", a !== b);

//Assignment operators
let c= a+b;
console.log("c =", c);
c += a;
console.log("c += a =", c);
c -= a;
console.log("c -= a =", c);
c *= a;
console.log("c *= a =", c);
c /= a;
console.log("c /= a =", c);
c %= a;
console.log("c %= a =", c);

//Logical operators
let x= true;
let y= false;
console.log("x && y =", x && y);
console.log("x || y =", x || y);
console.log("!x =", !x);
console.log("!y =", !y);

//Ternary operator
let age= 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote =", canVote);