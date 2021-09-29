// jQuery
// get suggestions with vscode
// npm init
// npm i -D @types/jquery

// selecting elements
// https://learn.jquery.com/using-jquery-core/selecting-elements/

// pure JS code:
// document.querySelector...

$; // global jQuery object/function

// selecting an element with CSS selectors
$("#container"); // array of 1 jQuery element
$(".child"); // array of jQuery elements

// this returns us jQuery objects, similar to the HTML elements you can get with document.getElementById or document.querySelector, but enriched with jQuery functions/methods

// select the first child of the #container element
// full CSS syntax
$("#container p.child:first-of-type");
// you can chain a lot of methods from jQuery!
$("#container").children().first();

// try to select the last .child element and from this the parent again.
$("#container").children().last().parent();

// select the brothers and sisters of the last .child element
$("#container").children().last().siblings();

/**
 * Many more
 * .next()
 * .prev()
 * ...
 */

// find all italic child items
$("#container").find(".italic");

// select .child at index 2 using .eq()
$("#container").children().eq(2); //third item (0 based)
$("#container").children().eq(-2); // 2nd item starting from the last

// pseudo selectors
// https://api.jquery.com/category/selectors/
// jQuery adds some CSS_like selector that you can use
$("#container p.child:first-of-type"); // :first-of-type is a CSS selector
$("#container p.child:first"); // :first is a jQuery "CSS-like" selector
$("body :first"); // :first is a jQuery "CSS-like" selector --> returns the #container

// select a hidden element without using the randomClassName
$("body :hidden");

// select all the visible elements
$(":visible");

// every odd/even items
$("#container:odd");
$("#container:even");

// add (remove) a class on all .child elements
$("#container").children().addClass("something");
// $('#container').children().removeClass("something");

// creating an element in our container. No specific jQuery method:
// https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent
$('<div class="test">content</div>');
$("<div>");
const newElement = $(document.createElement("div"));
const anotherElement = $(document.createElement("div"));

$("#container").append(newElement);
anotherElement.appendTo($("#container"));

// be careful when chaining. Here we set a class on the container! Because the append method returns the same object (here the container)
$("#container").append($("<div>")).addClass("test");

// EVENT LISTENERS
/* document.querySelector("#container").addEventListener("click", () => {
  console.log("clicked");
}); */
// jQuery equivalent
// deprecated!
/* $('#container').click(() => {

}) */
$("#container").on("click", () => {
  console.log("clicked");
});
// reference to the click handler/listener is optional
// $("#container").off('click');
// remove all listeners independently of the event name
// $("#container").off();

$("#container .child").one("click", function () {
  console.log("child clicked");
});

/**
 * Exercise
 *
 * - Add a new container with children
 * - on each child add a click event listener
 * - when clicked change the color of the clicked item's text only
 */
$("#container2")
  .children()
  .one("click", function () {
    console.log("child clicked", this);
    // we are changing the clicked item color only, not the other items color
    // jQuery pass the current element inside the this keyword/variable
    $(this).css("color", "red");

    // reversed: all the other one turn red except the one which was clicked
    // code is not working perfectly after the second click (it's just for the demo!)
    // $(this).siblings().css("color", "red");
  });
