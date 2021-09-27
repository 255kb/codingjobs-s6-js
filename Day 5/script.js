// == vs ===, != vs !==
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// == != non strict equality only compares values

console.log("" == false); // --> true because a falsy value == another falsy value
console.log("" == 0); // true

// === !== strict equality compares values and types
console.log("" === false); // --> false because === checked for the type two, and string/booleans cannot be compared

// falsy values
0;
undefined;
null;
("");
false;

// truthy values
1; // positive number
true;
("non empty");
{
}

// be extra careful when you do this, working with falsy values:
const myName = "";
if (myName) {
  // shorthand for myName == true
  console.log("we have a name");
}

// when is the non strict equality useful?
let myVar;

// database didn't worked, so variable is still undefined
// myVar = database.get();

// we want to check for undefined and null values at the same time
if (myVar == null) {
  // shorthand for myVar != false
  console.log("there was an error");
}

// TERNARY OPERATOR
// shorthand for if / else
const userType = "admin";
if (userType === "admin") {
  console.log("welcome to the admin section");
} else {
  console.log("you cannot come here");
}

userType === "admin"
  ? console.log("welcome to the admin section")
  : console.log("you cannot come here");

const message =
  userType === "admin"
    ? "welcome to the admin section"
    : "you cannot come here";

console.log(message);
