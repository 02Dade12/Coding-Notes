// Used to create dynamic web applications that take in user inputs, change what’s displayed to users, animate elements, and much more.


// Basic Javascript cansist of the following:


// Line comments
/* Block comments */
// = One equal sign is an assignment
// == Two equal signs is a comparison; does left == right
// === Three equal signs is explicit or exact match
// !== is equal to !-NOT ==EQUAL
// !variable === is equal to !-NOT ==EQUAL
// || is equal to "or"
// $$ is equal to "and"
// \n is a character to make a line break


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
// The console.log() method is used to display data in the the browser’s console. 
// Console Logs allow developers to test what they build as they build it


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


// 