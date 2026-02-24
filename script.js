// console.log("Hello World!");
// document.write("Hello World!");

let num =10;
console.log(num);

console.log(typeof(num));

num= false;

console.log(num);
console.log(typeof(num));

num = "Hello World!";
console.log(num);
console.log(typeof(num));

num = null;
console.log(num);
console.log(typeof(num));

num = undefined;        
console.log(num);
console.log(typeof(num));

//function in a variable
let sayHello = function() {
    alert("Hello World!");//alert will not be shown in terminal, it will be shown in the browser
}

sayHello();

//array
var arr= [1,2,3,4,5];//array literal
console.log(arr);

var animals = new Array("dog", "cat", "rabbit");//array constructor
console.log(animals);

//Object
var person = { // key-value pairs..will be accessed by the key value
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

