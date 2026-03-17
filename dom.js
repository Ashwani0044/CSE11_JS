//DOM IN JS..

//1. document.getElementById() method
//2. document.getElementsByClassName() method
//3. document.getElementsByTagName() method
//4. document.querySelector() method
//5. document.querySelectorAll() method

const para= document.getElementById("para");
para.innerHTML= "This is a paragraph";
para.style.color= "blue";
para.style.fontSize= "20px";
para.title = "huhhhuh..";

//ID is unique for each element, so it will return only one element but class is used for multiple elements, so it basically returns an array..so we have to use it like an array gotta provide the index when writing or else it will return undefined..

const para1 = document.getElementsByClassName("para1");
para1[0].innerHTML= "This is a paragraph1";
para1[0].style.color= "red";
para1[0].style.fontSize= "20px";
// para1[1].innerHTML= "This is a paragraph2";
// para1[1].style.color= "green";
// para1[1].style.fontSize= "20px";

const p= document.getElementsByTagName("p");
p[2].innerHTML= "Yeahh Buddy!!";
p[1].style.color= "green";


// Document.querySelector() method is used to select the first element that matches a specified CSS selector(s) in the document. It returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, it returns null.

const s= document.querySelector(".para1");
s.style.fontSize= "30px";

// Document.querySelectorAll() method is used to select all elements that match a specified CSS selector(s) in the document. It returns a static NodeList of all elements that match the specified selector(s). If no matches are found, it returns an empty NodeList.

const d= document.querySelectorAll("p");
for(x in d) {
    d[x].style.fontSize= "30px";
}

const li = document.querySelectorAll("ul li");
for(x in li) {
    li[x].style.color= "orange";
}


// getAttribute() method is used to get the value of an attribute of an element. It takes the name of the attribute as a parameter and returns the value of that attribute. If the attribute does not exist, it returns null.
const element= document.getElementById("myH1");
let text= element.getAttribute("class");
document.getElementById("demo").innerHTML= text;

//setAttribute() method is used to set the value of an attribute of an element. It takes the name of the attribute and the value to be set as parameters. If the attribute does not exist, it will be created.

function myFunction() {
    document.getElementById("myH1").setAttribute("class", "democlass");
    alert("Class attribute has been set to 'democlass'");
}