/**
 * Exercise
 * - using the map method, add prefixes to the array items
 */
const userNames = ["john", "Patricia", "Santa"];

const newArray = userNames.map((name) => {
  return "Hello " + name;
});
console.log(newArray);

/**
 * Exercise
 * - create an array of objects
 * - use the map method to add one or more properties to each object
 */

const users = [{ name: "john" }, { name: "Patricia" }, { name: "Santa" }];

const newUsersArray = users.map((user) => {
  user.city = "Luxembourg";
  return user;
});
console.log(newUsersArray);
