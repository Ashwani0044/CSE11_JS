//JSON: stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used for transmitting data in web applications between a server and a client.

//In JavaScript, you can use the built-in JSON object to work with JSON data. The JSON object has two main methods: JSON.stringify() and JSON.parse().

var text= '{"employees":'+'[{"firstName":"John", "lastName":"Doe"},'+'{"firstName":"Anna", "lastName":"Smith"},'+'{"firstName":"Peter", "lastName":"Jones"}]}'; //This is a JSON string. It represents an object with a property "employees" that is an array of objects, each representing an employee with a first name and last name.

var obj= JSON.parse(text); //JSON.parse() method parses a JSON string and returns a JavaScript object.

// document.getElementById("demo").innerHTML= obj.employees[0].firstName+" "+obj.employees[0].lastName; //John Doe

for(var i=0; i<obj.employees.length; i++) {
    document.getElementById("demo").innerHTML+= "<br>"+obj.employees[i].firstName+" "+obj.employees[i].lastName; 
}

// Asynchronous programming
 let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success)
        resolve("Data Loaded");
    else
        reject("error Occured");
 });
 promise.then(result => console.log(result))
 .catch(error => console.log(error));

//  // Synchronous programming
//  async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
//  };
//  getData();



//  // fetch api
//  fetch("'https://jsonplaceholder.typicode.com/todos/1'")
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

 // error handling 
 // errors can be handled using try ... catch


//  try{
//     var x = y+10;
//  }
//  catch(error){
//     console.log(error.message);
//  }



// local storage
// local storage allows data to be stored in the browser permanently (always stores in string format)
// store data
localStorage.setItem("name","Jeet");

// retrieve data
var name1 = localStorage.getItem("name");
console.log(name1);

// remove data

localStorage.removeItem("name");

// store object

var user = {name : "jeet" , age : 50};
localStorage.setItem("user",JSON.stringify(user));

