/**
 * Home exercise:
 *
 * "Star Wars planets list + details"
 * - create two HTML elements, one for the planets list, another for one planet details
 *
 * First part:
 * - using jQuery Ajax, fetch a list of planets with a request to https://swapi.dev/api/planets/ (GET)
 * - display the list of planets names in the HTML planet list container, in a new HTML link element (<a>)
 *
 * Second part:
 * - listen for clicks on all the planet names <a> elements
 * - after a click on such element, make a GET request (using jQuery ajax) to the following url https://swapi.dev/api/planets/x/ where 'x' is the id of the planet, OR directly display the planet information (below) if you can.
 * - display in the other HTML container some details about the planet you just requested from the API, like the name, the population, etc.
 */
$.get("https://swapi.dev/api/planets/", function (planetsResult) {
  planetsResult.results.forEach((planet) => {
    createPlanetMenuItem(planet);
  });
});

/**
 * Create a new planet name link
 *
 * @param {*} planet
 */
const createPlanetMenuItem = function (planet) {
  $("<a>")
    .text(planet.name)
    .appendTo(".planetList")
    .on("click", function () {
      showPlanet(planet);
    });
};

/**
 * Show a planet details after removing the container content
 */
const showPlanet = function (planet) {
  $(".planetDetails").empty();
  $("<p>")
    .appendTo(".planetDetails")
    .text("Population: " + planet.population);
  $("<p>")
    .appendTo(".planetDetails")
    .text("Gravity: " + planet.gravity);
};
