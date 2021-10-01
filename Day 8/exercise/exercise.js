/**
 * Exercise:
 * I have an input
 * I want the input to have an autocomplete component from jQuery
 * But
 * We only want this autocomplete feature to be enabled when we click on a button
 *
 * 2nd part:
 * modify the code:
 * - "create" the autocomplete outside of the on('click'), disabled
 * - enable it after the click
 *
 */
const suggestions = ["cat", "dog", "fish"];

$("input").autocomplete({ source: suggestions, disabled: true });

$("button").on("click", function () {
  $("input").autocomplete("enable");

  /* 
  // alternative 
  $("input").autocomplete({ disabled: false }); 
  */

  // add a bounce effect with jQuery UI on the input after a click

  $("input").effect("bounce");
});
