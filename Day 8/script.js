// jQuery UI
// https://jqueryui.com/
// requires jQuery, library of CSS + JS components

// add a jQuery autocomplete component in the page
// wait for document ready (shorthand)
$(function () {
  var availableTags = ["cat", "dog", "fish", "poney"];

  $("#tags").autocomplete({
    source: availableTags,
  });
});
