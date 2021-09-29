/**
 * Exercise
 *
 * - fadeIn the square when entering the page, square should be hidden by default (at the beginning)
 * - try to find a way to delay the animation
 */
// with a settimeout
/* setTimeout(() => {
  $(".square").fadeIn(1000);
}, 5000);
*/

$(".square").delay(2000).fadeIn(1000);

// chain the above line of code with another delay and fadeOut
$(".square").delay(2000).fadeIn(1000).delay(5000).fadeOut(500);

/**
 * Exercise
 * - create an array of strings OR objects (products with names)
 * - iterate with the foreach
 * - for each element, create a new product HTML element, with the name inside and animate() its opacity and left position
 * - try to delay each item animation so they enter one by one --> delay(1000*index)
 */
const products = [{ name: "apple" }, { name: "banana" }, { name: "pineapple" }];

products.forEach((product, index) => {
  //    $(document.createElement("div"));
  //$("<div></div>");

  $("<div>")
    .text(product.name)
    .css({ opacity: 0, position: "relative" })
    .appendTo($(".container"))
    .delay(1000 * index)
    .animate({ opacity: 1, left: "250px" }, 2000);
});
