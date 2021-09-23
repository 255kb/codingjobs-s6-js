/**
 * Exercise 1:
 * Inside the iteration/loop, use conditions to display if the number is even or odd (OR above/below a number that you define) in the console
 *
 */

const list = [1, 2, 6, 9, 8, 5, 4, 7, 23];
list.forEach((nb) => {
  if (nb >= 5) {
    console.log("big number");
  } else {
    console.log("small number");
  }
});
