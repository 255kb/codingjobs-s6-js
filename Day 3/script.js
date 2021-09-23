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
 */

// MORE LOOPS
