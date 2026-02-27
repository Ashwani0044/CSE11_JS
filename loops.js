//For loop..
//there are three types of for loops in js.
//1.
for(let i=0;i<5;i++){
    console.log(i);
    // document.write(i+"<br>");
}
// document.write("Loop stopped<br>");


//2. object ko for loop se access krne ke liye we use 'in' operator.
const person = {
    fname: "virat",
    lname: "kohli",
    age: 37
};
for(let key in person) {
    console.log(key + ": "+person[key]);
}

//3. array ko for loop se access krne ke liye we use 'of' operator.
const arr = [1,2,3,4,5];
for(let value of arr) {
    console.log(value);
}


// while loop
let i=0;
while(i<5) {
    console.log(i);
    i++;
}