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
