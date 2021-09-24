/**
 * Exercise 1
 *
 * - get the list element
 * - create a new "user" element
 * - add the ".user" class to this user element (you can also change the text if you want)
 * - insert the user element in the list
 */
const listElement = document.querySelector("div.list");
const userElement = document.createElement("div");
// directly modify the classes (list) string
userElement.className = "user";
// add/remove/toggle classes from the list with methods
userElement.classList.add("user");
// alternative
userElement.classList.toggle("user");
