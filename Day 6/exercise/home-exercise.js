/**
 * Rewrite parts of this Day 3 exercise with jQuery code (to replace the appendChild, etc.)
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
