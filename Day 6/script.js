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
$('#container').children().addClass("something");
// $('#container').children().removeClass("something");

// creating an element in our container. No specific jQuery method:
// https://stackoverflow.com/questions/268490/jquery-document-createelement-equivalent
$("#container")