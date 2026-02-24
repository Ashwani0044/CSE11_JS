//symbol type
const sym1= Symbol(7);
const sym2= Symbol(7);

console.log(sym1);
console.log(sym2);
console.log(typeof(sym1));
console.log(typeof(sym2));

if(sym1 === sym2){
    console.log("sym1 and sym2 are equal");
}   else{
    console.log("sym1 and sym2 are not equal");//here both have value 7 but they are not equal because they are unique
}

//each symbol is unique even if they have the same description
//symbol is used to create unique identifiers for object properties