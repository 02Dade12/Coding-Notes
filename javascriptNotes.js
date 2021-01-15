// Used to create dynamic web applications that take in user inputs, change what’s displayed to users, animate elements, and much more.

// Basic Javascript cansist of the following:

// Line comments
/* Block comments */
// One equal sign "="is an assignment
// Two equal signs "=="is a comparison; does left == right
// Three equal signs "==="is explicit or exact match

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
var exampleArr = ["zebra", "cat", "dog", "monkey", 2, stringVar, "bird"];
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
// if item is not in the array, it will return index of -1