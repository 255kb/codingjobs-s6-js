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
