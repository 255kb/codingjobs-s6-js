/**
 * COMPARISON OPERATORS
 *
 * ==
 * ===
 * !=
 * !==
 *
 * <=
 * <
 * >=
 * >
 */

const connected = true;
const firstVisit = true;

// LOGICAL OPERATORS & more complex conditions
// AND &&, OR ||, NOT !

// we can omit the '=== true' because we are working with booleans
if (connected && firstVisit) {
  console.log("Welcome new user!");
} else if (connected && !firstVisit) {
  console.log("Welcome returning user!");
} else {
  console.log("please register");
}
const age = 15;
// grouping conditions
if (connected && firstVisit && age >= 13) {
}

// be careful about the priority: OR has the priority here, so we separate the first two conditions with parenthesis
if ((connected && firstVisit) || !connected) {
}

// long IF alternative: switch .. case
const category = "vegetable";

if (category === "vegetable" || category === "fruit") {
  console.log("It's a plant");
} else if (category === "meat") {
  console.log("It's meat");
} else {
  console.log("It's something else");
}

switch (category) {
  // equivalent OR, cases with no break;
  case "vegetable":
  case "fruit":
    console.log("It's a plant");
    break;
  case "meat":
    console.log("It's meat");
    break;

  // default can be omitted
  default:
    console.log("It's something else");
    break;
}

// DOM manipulation: adding classes and style
const square = document.querySelector("div");
// className: for simple use cases, harder to manipulate as it will overwrite existing classes. It directly overwrite the content of the class attribute
square.className = "square";
square.className += " another-class";

// for more complex use case: classList, with multiple methods: add, remove, toggle (if present, remove it if absent add it)
square.classList.add("added-class");
square.classList.remove("square");
square.classList.toggle("toggled-class");

// directly edit (CSS) style on an element
square.style.backgroundColor = "red";
square.style.height = "100px";

// TIMERS
setTimeout(() => {
  console.log("hello");
}, 5000);

const id = setInterval(() => {
  console.log("hello again");
}, 1000);
setTimeout(() => {
  clearInterval(id);
}, 5100);

// Different kind of array loops: map and reduce
const list = [1, 2, 3, 4, 5];
const newArray = list.map((value, index) => {
  console.log(value, index);

  return value;
});
console.log(newArray);