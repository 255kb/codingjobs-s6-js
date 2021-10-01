/**
 * Home exercise
 *
 * Starting from the code below:
 * - add a 'close' button inside each product HTML element
 * - when each element's 'close' button is clicked, make it's parent product element disappear in the opposite direction + fade out, using the animate() function (i.e. reverse the animation)
 *
 * Bonus
 * - only display the 'close' button when you hover the product with the mouse (using a mouseover event listener)
 */
const products = [{ name: "apple" }, { name: "banana" }, { name: "pineapple" }];

products.forEach((product, index) => {
  const button = $('<button type="button">Close</button>')
    .hide()
    .on("click", function () {
      $(this).parent().animate({ left: 0, opacity: 0 }, 2000);
    });

  // product div
  $("<div>")
    .text(product.name)
    .append(button)
    .hover(
      function () {
        // two syntaxes to find the button
        // $("button", this);
        $(this).find("button").show();
      },
      function () {
        $(this).find("button").hide();
      }
    )
    .css({ opacity: 0, position: "relative" })
    .appendTo($(".container"))
    .delay(1000 * index)
    .animate({ opacity: 1, left: "250px" }, 2000);
});
/* 
// another valid approach
$(".container button").on("click", function () {
  $(this).parent().animate({ left: 0, opacity: 0 }, 2000);
});
 */
