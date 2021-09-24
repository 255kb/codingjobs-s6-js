/**
 * Exercise 1
 * - Create three number variables
 * - display a message when the number is between the 'start' and 'end' variables
 *
 */
const start = 5;
const end = 10;

const myNumber = 11;

if (myNumber > start && myNumber < end) {
  console.log("between");
} else {
  console.log("not between");
}

/**
 * Exercise 2
 *
 * modify the code so it checks first if the number is outside
 *
 * be careful to reverse the comparisons and the operator!
 */

if (myNumber <= start || myNumber >= end) {
  console.log("not between");
} else {
  console.log("between");
}

/**
 * Exercise 3
 * - replace the following if conditions with a switch..case
 *
 */
const userAge = 42;

if (userAge === 42) {
  console.log("This is a nice age!");
} else if (userAge >= 13) {
  console.log("you can enter the website");
} else if (userAge <= 0) {
  console.log("you are not born yet");
} else if (userAge < 13) {
  console.log("you are too young");
}

// switch is not a perfect replacement for all if conditions, especially if we are using comparison operators. Using comparisons in switches is kind of "unnatural"
// this will not work...
// switch (userAge) {

// this will work
switch (true) {
  case userAge === 42:
    console.log("This is a nice age!");
    break;
  case userAge >= 13:
    console.log("you can enter the website");
    break;
  case userAge <= 0:
    console.log("you are not born yet");
    break;
  case userAge < 13:
    console.log("you are too young");
    break;
}

// this is a more correct use of a switch, but not fitting our use case
switch (userAge) {
  case 42:
    console.log("This is a nice age!");
    break;
  case 13:
    console.log("you can enter the website");
    break;
}
