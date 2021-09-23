/**
 * Home exercise:
 *
 * - create a list of users (objects)
 * - user objects need to have some flags (booleans): 'connected', 'numberOfComments'
 * - display the list of users in an HTML element with the number of comments
 * - add a red/green circle (new element?) next to each user, depending on the 'connected' flag (boolean)
 * - sort the list by the number of comments
 *
 *
 * Bonus:
 * - add a new property 'comments' to each user object, and display in the page, for each user, a list of its own posts (title is enough)
 *
 */

const users = [
  { username: "john25", connected: true, numberOfComments: 1 },
  { username: "mary1982", connected: false, numberOfComments: 5 },
  { username: "spiderman", connected: true, numberOfComments: 0 },
];
const userListElement = document.querySelector("div#user-list");

users.forEach((user) => {
  const newUserElement = document.createElement("div");
  newUserElement.innerText = `${user.username} (${user.numberOfComments})`;

  const newConnectionElement = document.createElement("span");
  // TODO connected or not 'circle':
  newConnectionElement.innerHTML = '?';

  newUserElement.appendChild(newConnectionElement);

  // BONUS
  // TODO
  // BONUS

  userListElement.appendChild(newUserElement);
});
