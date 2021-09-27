/**
 * Display (console.log) each item in the reverse order using a for loop (no array.reverse!)
 *
 *
 */

const planets = ["earth", "neptun", "mars", "venus"];

for (let index = planets.length - 1; index >= 0; index--) {
  console.log(planets[index]);
}

/**
 * Do the same with a while
 */
let wIndex = planets.length - 1;

while (wIndex >= 0) {
  console.log(planets[wIndex]);
  wIndex--;
}

/**
 * using a forEach on the planets array display every second items
 */
planets.forEach((planet, index) => {
  if (index % 2 === 0) {
    console.log("modulo", planet);
  }
});

/**
 *
 * Create a complex planet object with name, temperature, humidity, habitable (boolean)
 * create a function that returns a new object with the average temperatures, summer and winter: {winterAvg ...} for a specific planet (passed as a parameter)
 *
 */
const planet = {
  name: "earth",
  temperature: 30,
  humidity: 60,
  habitable: true,
};

const getAverageTemp = function (planet) {
  return { winterAvgTemp: planet.temperature - 40 };
};

const avgTemp = getAverageTemp(planet);
console.log(avgTemp);

/**
 * Try to move the getAverageTemp function inside the object
 */

const planet2 = {
  name: "earth",
  temperature: 30,
  humidity: 60,
  habitable: true,
  getAverageTemp: function (winterTemp) {
    // we can use 'this', but not with an => arrow function (because this will become 'window' object)
    // remember if you use this, be careful about using function() {} OR () => {} google it!
    return { winterAvgTemp: this.temperature - winterTemp };
  },
};

console.log(planet2.getAverageTemp(40));

// Class equialent (not in the program)
class Planet {
  temperature;

  constructor(temp) {
    this.temperature = temp;
  }

  getAvg() {
    return this.temperature / 2;
  }
}

const planet3 = new Planet(10);
planet3.getAvg();
