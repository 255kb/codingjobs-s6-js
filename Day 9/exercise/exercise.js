/**
 * Exercise:
 * - create a container HTML element so we can display our planets
 * - using jQuery Ajax method (ajax(), get(), etc.) fetch a list of planets from the SW API
 * --> GET https://swapi.dev/api/planets/
 * - after fetching the data, display all the planets 'name' and 'population' in new HTML elements
 */
$.get("https://swapi.dev/api/planets/", function (data) {
  /* 
  // this could work too, instead of data.results.foreach, but it's more verbose. And it was designed to iterate on jQuery elements
  $.each(data.results, function (index, element) {
    console.log(index, element);
  }); */

  data.results.forEach((planet) => {
    // $(document.createElement('div'))
    $("<div>")
      .appendTo(".container")
      .text(`${planet.name}  ${planet.population}`);
  });
});

/**
 * Exercise 2
 * - create a small HTML form element with some inputs. Don't forget to set the inputs names attribute.
 * - add a submit button (type submit)
 * - listen for 'submit' event on the form
 * - when the form is submitted, gather the form data
 * - and make a POST request to our small Node.js API (POST http://localhost:3000/tasks)
 * - check that we received the data in the terminal/bash running the API
 * - after the POST call is done, display a small success message on the page
 *
 * - check if inputs fields are filled before submitting
 */
$("form").on("submit", function (event) {
  event.preventDefault();
  const formData = $("form").serialize();

  if ($('input[name="firstname"]').value && $('input[name="lastname"]').value) {
    $.post("http://localhost:3000/tasks", formData, function () {
      $("<p>Thank you!</p>").appendTo("body");
    });
  }
});
