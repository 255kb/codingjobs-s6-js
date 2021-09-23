// MORE lISTENERS
const contentDiv = document.querySelector("div#content");

// register multiple listeners for the same event
const registerListeners = function () {
  contentDiv.addEventListener("click", clickListener);
  contentDiv.addEventListener("click", clickListener2);
  contentDiv.addEventListener("mouseenter", () => {
    console.log("mouseenter");
  });
  contentDiv.addEventListener("mouseleave", () => {
    console.log("mouseleave");
  });
};

document
  .querySelector("button#startlistening")
  .addEventListener("click", () => {
    registerListeners();
  });

document.querySelector("button#stoplistening").addEventListener("click", () => {
  removeListeners();
});

const clickListener = () => {
  console.log("clicked");
};
const clickListener2 = () => {
  console.log("clicked2");
};

// remove one specific event listener: we need to reuse the same function!
const removeListeners = function () {
  contentDiv.removeEventListener("click", clickListener);
};

/**
 * there are many events:
 * https://www.w3schools.com/jsref/dom_obj_event.asp
 *
 * - DOMContentLoaded event: browser triggers this event to inform that the DOM is fully loaded (page is fully parsed)
 */

// MORE LOOPS

/**
 * - for
 * - while
 *
 * - for .. in
 * - for .. of
 *
 * Arrays:
 * - foreach
 * - map
 * - reduce
 *
 */

// for .. in: for objects only!
const article = {
  title: "title 1",
  text: "aaaa",
};
for (const key in article) {
  console.log(key);
}

const list = [1, 2, 3];

// for .. of: for all iterables (array, Map, Set, etc.)
for (const item of list) {
  console.log(item);
}

// Object.keys and Object.values often used in combination with loops
// Object.keys: directly returns an array with the property names
console.log(Object.keys(article));
// Object.values: directly returns an array with the values names
console.log(Object.values(article));

// LOGIC

const condition1 = true;
const condition2 = false;

// the most simple test
if (condition1 === true) {
  console.log("test passed");
}

const numberList = [1, 2, 3, 4, 5, 6];

// testing the length of an array
if (numberList.length > 5) {
  console.log("that is a big array");
}

// operators
// (==)
// (!=)
// ===
// !==
// >=
// <=
// <
// >


// truthy / falsy values
