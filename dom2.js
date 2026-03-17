//create an element
const heading= document.createElement("h1");

//get the parent
const bodytag=  document.getElementsByTagName("body");

//add element at the position using append method bodytag[0].append(heading);
heading.innerHTML= "hello";
heading.style.backgroundColor= "yellow";

//there are four positions in the body where we can add the element ..
//before, prepend, append, after..


//remove method

//EVENTS IN JS..
//onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onload, onunload, onchange, onsubmit, onfocus, onblur etc..

function clickme() {
    alert("You clicked the button!!");
}
function clickme1() {
    alert("You clicked the button!!");
}
function clickme2() {
    alert("You clicked the button!!");
}
function clickme3() {
    alert("You clicked the button!!");
}
function onchange() { //ONCHANGE EVENT: it will work when we change the value in the input field and then click outside the input field.. it will not work if we just change the value and stay in the input field..
    alert("You changed the input!!");
}

//function to change the mode of the website to both dark and light mode.. we can use a button to call this function and change the mode of the website.. we can also use a toggle button to switch between dark and light mode..
function changemode() {
    const body= document.getElementsByTagName("body")[0];
    if(body.style.backgroundColor== "white") {
        body.style.backgroundColor= "black";
        body.style.color= "white";
    }
    else {
        body.style.backgroundColor= "white";
        body.style.color= "black";
    }
}

const x= document.querySelector('input');
 x.addEventListener('focus', onhandlefocus);
 x.addEventListener('blur', onhandleblur);

function onhandlefocus() {
    x.style.backgroundColor= "yellow";
}
function onhandleblur() {
    x.style.backgroundColor= "blue";
}

function onload() { 
    alert("Page is loaded!!");
}

function onresize() {
    alert("You resized the window!!");
}

function onunload() {
    alert("You are leaving the page!!");
    //it will appear when we try to leave the page by clicking on the back button or closing the tab or window.. it will not work if we just refresh the page..
}