// Used to create dynamic web applications that take in user inputs, change what’s displayed to users, animate elements, and much more.


// Basic Javascript cnsist of the following:


// Line comments
/* Block comments */
// = One equal sign is an assignment
// == Two equal signs is a comparison; does left == right
// === Three equal signs is explicit or exact match
// !== is equal to !-NOT ==EQUAL
// += this means take left value and add right value example; 0 += 1 equals 1
// !variable === is equal to !-NOT ==EQUAL
// || is equal to "or"
// $$ is equal to "and"
// \n is a character to make a line break
// -- means subtract by 1
// ++ means add by 1


//Variables
var variable = ""
var stringVar = "string";
var numberVar = 99;
var isBooleanVar = true;
var objVar = {};
var arrVar = [];
var functionVar = function(){};
// Values can consist of Numbers, strings "text", Booleans (true/false), var, etc...
// lower case strings or use camelCase
// Variables with the name being in "is", is usually an example; var isBooleans = true;


//Console.log
console.log("string" + isBooleanVar);
console.log(variable);
console.log(numberVar + 1);
console.log(window);
console.log(this);
// The console.log() method is used to display data in the the browser’s console. 
// Console Logs allow developers to test what they build as they build it
// console.log(window) will give you property and value information about the window
// console.log(this) will give us access to the Window Object


// Prompts, Confirms, & Alerts
prompt();
confirm();
alert();
// Prompts - User will write response
// Confirms - User responds true (ok) or false (cancel)
// Alerts - is an alert; click (ok) to proceed


// If/Else statements are conditionals
if (variable) {

}else if (isBooleanVar){

}else {

};
// if variable, function, etc is inside () and true, the if, else, else if, while statements will run


// ParseInt()
parseInt();
// This will convert a string into an integer


// Arrays
var exampleArr = ["Zebra", "cat", "dog", "monkey", 2, stringVar, "bird"];
// An array is a collection of items strings, numbers, Booleans, Varibales, etc...
// Arrays are numbers that start with an Index of 0 example below:
// zebra, cat, dog, monkey
//  0   ,  1 ,  2 ,  3     = index of 4
console.log(exampleArr.length);
// this will give you the length of the array, for this example = 7
console.log(exampleArr[6]);
// this will print bird
console.log(exampleArr.indexOf("boss"));
// this will return the index of the item in ()
// this will also only return the first index if the item is repeated
// if item is not in the array, it will return index of -1 (such as the example above


//.toLowerCase()
console.log(exampleArr[0].toLowerCase());
console.log(("STRING").toLowerCase());
// .toLowerCase() is a built in method that comes with javascrript and therfore requires ()


// Loops
var forLoopArrEx = ["First", "Second", "Third", "Fourth", "Fifth"];
var forLoopArrExLength = forLoopArrEx.length;

for (var i = 0; i < forLoopArrEx.length; i++) {
    console.log("I came in " + forLoopArrEx);
    /*Code between the { } gets repeated each time the iterator is smaller 
    than the condition (in this case, as long as  i < 5) */
}
// var i = 0; is the "Iterator"
// i < forLoopArrEx.length; is the "Condition"
// i++; is the Increment


// .charAt()
for (var i = 0; i < forLoopArrEx.length; i++) {
    if (forLoopArrEx[i].charAt(0) === "F" || forLoopArrEx[i].charAt(0) === "S") {
        alert("This word started with an 'F' or 'S'")
    }
}
// The above example for charAtt() will look for a specific later in a string
// The answer in the example would reference: First, Second, Fourth, Fifth


// Math.floor(Math.random() * value)
for (var i = 0; i < 10; i++){
    var num = Math.floor(Math.random() * 10) + 1
    console.log(num);
}
// Math.random gives us a number between two points including numbers that are not whole
// Math.floor will round down the number bringing it to a whole number
// Since we want a number between 0-10, we +1 to the iterator to include the number 10


// Function
function funcDefitionEx(){
    for (var i = 0; i < forLoopArrExLength; i++ ){
}};
// The function is defined/named followed by ()
// Arguments can be brought in and passed in to the function if inside the ()
// Once a function is describe, it must be called after for it to be used
function addReturn (x, y, z) {
    return x + y + z;
};
// Multiple arguments can be placed within the ()
// "return" will return the result of the function, OUTSIDE of the function


// Objects
var objectExample = {
    "First": "Me",
    "Second": "You",
    "Third": "Them",
    "First Name": "Me First",
};
// On the left of the : is the "property"
// Properties are known as descriptors 
// On the right of the : is the "value" of that property 
// Each on is seperated with a ,
// The properties and values can be accesed like this:
// objectExample["first"] or objectExample.first
// DOT notation cannot be used if there is a space in the property


// window.document
console.log(window.document);
console.log(this);
console.log(document.body.children[0].childNodes) // Example with Nodes
// This is how you access the Document Object Module aka The DOM
// DOM is an object-oriented representation of HTML (i.e., the HTML document modeled as JavaScript objects)
// Each element is a Node; Nodes are organized in a tree.
// The DOM can be manipulated from the DEV Tools in google (in the console)
// This is helpful for debugging 
// Use DOT notation to traverse the DOM


// querySelector(All) & .setAttribute
var pickMe = document.querySelector(".class"); //this will select elements with this class
var pickMe = document.querySelector("#id"); // this will select elements with this id
var pickAll = document.querySelectorAll("P"); // this will select all the "P-tags"
for ( var i = 0; i < pickMe.length; i++){
    pickAll[0].setAttribute("style", "color:red;");
                         // "property", "value"
}
// In this example, the document will set the CSS font color attribute to red for all "P-tags"
// This is equvalient to adding CSS Style inline to our JavaScript
pickAll = document.querySelectorAll("P").value.trim(); 
// .trim() will remove the white space (blanks) from the beginning and ends of strings, not inbetween



// createElement & appendChild
var newElement = document.createElement("string or var that holds the element to be added");
newElement.textContent = "New element created";
document.body.appendChild(newElement);
// createElement will create a new element in Javascript
// Once an element is created, they will not appear on the HTML until they are appended
// appendChild will append the element to a parent at the end of list of elements in; in this case the parent is the "Body"
// If new elements are being created, append them in the order you want them to appear 


// getElementByTagName("")
var list = document.getElementsByTagName("li");
// this will give you an Array of the desired element, in this example list items


// setInterval()
setInterval(function(){
    
clearInterval();
}, interval);
// this allows you to set the time in milliseconds 
// false or true value can be added betwen }...); false is the default
// this taks a functions to let you know what should be done during the interval
// this is an annoynomus function that will call itset when the interval is set


// addEventListener & Event
newElement.addEventListener("click", function(event){
    // event is a JS event folllowed by the property which is based on the type of event
    
    event.preventDefault();
        // Prevent Default should be the first line written after the function is named
        // Prevent Default will prvent the default action of an element
    event.key
        // this will record the key press
    event.keyCode
        // this will record the code of the key pressed
    event.target
        //  this will listen for whatever was clicked (if in event lister)
    event.dataset
        // dataset is an object that holds all of our data attributes
    event.stopPropagation();
        // this will prevent event bubbeling (a child element event will not effect a parent element)
}); 
// addEventListner() is a standard method in Javascript
// addEventListner will listen to the event listed in the ""
// Event Types // 
// "click" will listen for a click event
// "change" will listen for if something changes
// "keydown" this will listen to capture what key was pressed down
// "keyup" this will listen to capture what key is released (good for buttons being held down)


// Local Storage
newElement.addEventListener("click", function(){
    localStorage.getItem("key", "value")
    sessionStorage.setItem("key", "value")

    localStorage.setItem("key", "value")
    sessionStorage.setItem("key", "value")
    
    localStorage.setItem("key", JSON.stringify(objVar));
        // OBJECTS cannot be saved straight into local storage and are required to be stringify-ed first
        // stringify with JSON.stringify()
        // JSON.parse(localStorage.setItem("key", "value") is how we turn a string back into an Object
});
// No sensitive information should be saved in local storage
// getItem this will retrieve the users saved data (if any)
// setItem will save the user info 
// localStorage will save the info in the users local storage
// sessionStorage will save the info only for the duration of the session

   
