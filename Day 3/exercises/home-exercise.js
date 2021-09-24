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
  {
    username: "john25",
    connected: true,
    numberOfComments: 1,
    comments: ["john first comment"],
  },
  {
    username: "mary1982",
    connected: false,
    numberOfComments: 5,
    comments: ["mary first comment", "mary second comment"],
  },
  {
    username: "spiderman",
    connected: true,
    numberOfComments: 0,
    comments: ["s first comment", "s scd comment", "s thrd comment"],
  },
];
const userListElement = document.querySelector("div#user-list");

users.sort((firstElement, secondElement) => {
  if (firstElement.numberOfComments > secondElement.numberOfComments) {
    return -1;
  } else if (firstElement.numberOfComments < secondElement.numberOfComments) {
    return 1;
  } else {
    return 0;
  }
});

users.forEach((user) => {
  const newUserElement = document.createElement("div");
  newUserElement.innerText = `${user.username} (${user.numberOfComments})`;

  const newConnectionElement = document.createElement("span");

  // add a condition for the connection status
  if (user.connected) {
    newConnectionElement.innerHTML = '<span class="connected"></span>';
  } else {
    newConnectionElement.innerHTML = '<span class="disconnected"></span>';
  }

  newUserElement.appendChild(newConnectionElement);

  user.comments.forEach((comment) => {
    const newCommentEl = document.createElement("span");
    newCommentEl.innerText = comment;
    newUserElement.appendChild(newCommentEl);
  });

  userListElement.appendChild(newUserElement);
});
