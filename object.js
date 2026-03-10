//OBJECTS

let x= new Object(); //object constructor
x= {
    name: "Virat",
    age: 37,
    isMarried: true,
    hobbies: ["cricket", "fitness"],
    address: {
        city: "Delhi",
        country: "India"
    }
};
console.log(x);
//accessing particular values of an object
console.log(x.name);
console.log(x.hobbies[0]);
console.log(x.address.city);

//making same object but with different syntax.
let y= new Object();
y.name= "Virat";
y.age= 37;
y.isMarried= true;  
y.hobbies= [];
y.hobbies[0]= "cricket";
y.address= {};
y.address.city= "Delhi";
y['address']['country']= "India";
console.log(y);

//ARRAYS
let arr= new Array();//array constructor..
// array is an special type of object
let arr1= Array();
console.log(arr, arr1);

arr= [
    {},
    [],
    true,
    "msd",
    function(){},
    13552,
    undefined,
    null,
    new Date()
];
console.log(arr);
arr.name= "Virat";
console.log(arr.length);//length of an array is 9 because it counts only the indexed elements, it does not count the non-indexed elements like name in this case.