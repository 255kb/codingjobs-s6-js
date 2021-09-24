/**
 * Exercise
 * Using setInterval add/remove the class .blink every X seconds
 */
const square = document.querySelector(".square");

// using the toggle method we don't need to add and remove separately and be extra careful about the timing
const runningIntervalId = setInterval(() => {
  square.classList.toggle("blink");
}, 500);

setTimeout(() => {
  clearInterval(runningIntervalId);
}, 5000);
