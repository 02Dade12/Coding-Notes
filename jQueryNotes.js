// jQuery is a cross-platform JavaScript library designed to simplify client-side HTML scripting.

// Basic jQuery consist of the following:

// $("...") is a selector 


// $ is a jQuery specific ($) selector
$("#id").on("click", function(){

});
// jQuery $("#id") is that same as document.getElementById(id) or document.querySelector("#id") in Javascript
// jQuery .on("click", function(){}) is the same as addEventListner("onclick", function(){}) in Javascript


// .html Method
$(".class").html("<h1>Hell Worl<h1>");
// This is how you enter new text fields into the HTML
// This does require the <tag><tag> to render as HTML
// This still has to be appended to an element


// .append Method
$(".class").append("Welcome my friends")
// This is the same as class/id.textContent = "Welcome my friends";


// create new <div>
var newDiv = $("<div>");
// this will create a new div
// this also works with text fields 
newDiv.text("Goodbye Friends")
// this will apply a new text to the new div, this still needs to be appended
 $(".class").append(newDiv);
 // this will complete the job and add the new div with text to the container with said ".class"
 // this will render on the HTML


 // 31:45 adding styles in jQuery
