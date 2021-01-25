// jQuery is a cross-platform JavaScript library designed to simplify client-side HTML scripting.

// Basic jQuery consist of the following:

// $("...") is a selector 
// $ is a jQuery specific ($) selector
// += is the corret syntax to add by more than one digit
// -= is the corret syntax to subtract by more than one digit

// Adding to HTML
// .createRow();
// .html()

// .ready 
$(document).ready(function(){

    // functions go in here

});
// This function in jQuery will make sure everything is rendered to the page before we interact with the page
// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.


// .on
$("#id").on("click", function(){

});
// jQuery $("#id") is that same as document.getElementById(id) or document.querySelector("#id") in Javascript
// jQuery .on("click", function(){}) is the same as addEventListner("onclick", function(){}) in Javascript


// .html Method
$(".class").html("<h1>Hell Worl<h1>");
$(".class").html("<img src='' />");
// This is how you enter new fields into the HTML
// This is the same as class/id.innerHtml 
// This does require the <tag><tag> to render as HTML
// This still has to be appended to an element

// .text Method
newDiv.text("Goodbye Friends")
// this will add text to your div


// .append & prepend Method 
$(".class").append("Welcome my friends")
$(".class").prepend("Hola!")
// This is the same as class/id.textContent = "Welcome my friends";
// this append as a child to a parent element
// append will post at the bottom of an element
// prepend will post at the top of an element


// create new <div>
var newDiv = $("<div>");
// this will create a new div
// this also works with text fields 
newDiv.text("Goodbye Friends")
// this will apply a new text to the new div, this still needs to be appended
 $(".class").append(newDiv);
 // this will add the new div with text to the container with said ".class"
 // and will render on the HTML


 // ,attr 
newDiv.attr("class", "fancy")
// .attr is the same as setAttribute in Javascrip
// this takes two strings, the property and value

// .each = forEach
$.each(drinkList, function(i, drink) {
    drinkDiv.append("<div>" + drink + "</div>");
  });
// Here we loop through our array using the .each() method and append a new div with each iteration
/* 
    1. we select the array to be looped over, in this example - (drinkList...

    2. Followed up by a call back function in order execute the conditions of our for loop
    the callback for jQuery needs to include the index & the value, in this example - ... function(i, drink){}

    3. drinkDiv.append("<div>" + drink + "<div>")
    this will create and append a new div "on the fly" without creating a new variable for the Div
    this will be appended to the drinkDiv

    4. i - index can be used to create and id for each div 
*/


// .play() .pause() for Audio
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "...")
audioElement.play();
audioElement.pause();
// this is an example of creating and audio element


// .animate()
    // Visibility Buttons
    $(".vis-button").on("click", function() {
    captainPlanet.animate({ opacity: "1" });
    });

    // Stretch Buttons
    $(".stretch-btn").on("click", function() {
        captainPlanet.animate({ height: "1000px", width: "200px" });
    });
    
    // Move Buttons
    $(".down-button").on("click", function() {
    captainPlanet.animate({ top: "+=200px" }, "normal");
    });
    $(".left-button").on("click", function() {
    captainPlanet.animate({ left: "-=200px" }, "normal");
    });
// these are different examples of using animate()


// . addClass();
var addClassExample = ("<div>");
addClassExample.addClass("big bold underline");
// this will add a class to your div

// . empty();
var clearClass = "";
clearClass.empty();
// . empty will empty out any data that is within the element / comtent
// = ""; will replace the string value with ""


// this
console.log(this);
// if a variable is not passed down into its nested function "this", "this" will print out the window object
// keep the variable within the function and close them off if they are not meant to be passed through
// return; to return a value outside of the nested function


// .attr
clearClass.attr("id", "clearClass");
// .set attr could be used to set an id

// AJAX

var queryURL = "apiKey"

ajax({
    URL: queryURL,
    method: GET, 
}).then(function(response){
    console.log(response);
});
// AJAX is a method of jQuery
// Use AJAX to return information from API's
// Below are AJAX methods telling it what to do with the info
// GET - Method this information is recieved
// POST -
// PUT/UPDATE - 
// DELETE -
// -- followed by --
// .then - then do something with the data
// this information will show up once everything is 
// Get through the info with .dot notation
// AJAX by default will bring back a JSON file

// JSON
JSON.stringify()
JSON.parse()
// Use .stringify to send info into local storage
// Use .parse to bring the info out of local storage

// Rounding Decimals
var roundthis = roundthis.toFixed(2);
// A number must be placed between () in order to indicate how many decimals numbers to round too


// .val().trim()
var trimming = trimming.val().trim();
// this will make sure there is not empty space at the end of the string