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
// This is the same as class/id.textContent = "Hello World";
// This does require the <tag><tag> to render as HTML
// This still has to be appended to an element


// .append Method
$(".class").append("Welcome my friends")
//