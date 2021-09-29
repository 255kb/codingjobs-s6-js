// ANIMATIONS

// 3 techniques
// JS
// using jQuery, https://animejs.com/, etc.
// written in JS, see the rest of the lesson for examples with jQuery

// CSS
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
// library of CSS animation snippets: https://animate.style/
// written in CSS: example taken from MDN (https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)

/*

#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
 
 */

// Web Animation API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
// written in JS (example taken from the above link):
/*

var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];
var aliceTiming = {
  duration: 3000,
  iterations: Infinity
}
document.getElementById("alice").animate(
  aliceTumbling,
  aliceTiming
)
*/

// performances?
// https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript#:~:text=TL%3BDR,%2C%20rewind%2C%20or%20slow%20down

// jQuery animations, also called effects (https://api.jquery.com/category/effects/)

// specific methods: fadeIn, fadeOut, fadeToggle, and the same with slide: slideUp, slideDown, slideToggle
// be careful, fadeOut and slideUp set display:none; on the element after animating

// With the element initially hidden, we can show it slowly:
$("#clickme").on("click", function () {
  // 'slow' equivalent to 600ms
  $(".square").fadeToggle("slow", function () {
    console.log("complete");
  });
});

// slideup a new element when loading the page
$(".square2").slideUp(1000);

// slideDown a square3 element when loading the page
$(".square3").slideDown(1000);

// animations with .animate() function
$(".square3").animate({ left: "250px" }, 1000, "linear", () => {
  console.log("animation complete");
});

// interacting with animations, the stop() method
$("#clickme").on("click", () => {
  // click fast and multiple times!
  $(".square3").stop();
});

// addEventListener DOMContentLoaded equivalent
// document.addEventListener('DOMContentLoaded', function() {})
//https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {
  console.log("document is ready!");
  // here you need to put the code that is immediately executed when the page starts --> good practice
});
