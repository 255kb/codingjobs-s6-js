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
// be careful, [0] will give us the HTMLElement, while working with .first() (a jQuery method) will returns a jQuery element
const userListElement = $("div#user-list").first();

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
  /* const newUserElement = $(document.createElement("div"));
  newUserElement.text(`${user.username} (${user.numberOfComments})`); */

  // alternative

  const newUserElement = $(
    `<div>${user.username} (${user.numberOfComments})</div>`
  );

  // closing tag is optional when creating
  const newConnectionElement = $("<span>");

  // add a condition for the connection status
  if (user.connected) {
    newConnectionElement.html('<span class="connected"></span>');
  } else {
    newConnectionElement.html('<span class="disconnected"></span>');
  }

  newUserElement.append(newConnectionElement);

  user.comments.forEach((comment) => {
    /* const newCommentEl = $("<span>");
    newCommentEl.text(comment);
    newUserElement.append(newCommentEl); */

    // reduce the size of the above 3 lines using chaining and another append method

    $("<span>").text(comment).appendTo(newUserElement);
    // alternative, a little bit less readable
    // $(`<span>${comment}</span>`).appendTo(newUserElement);
  });

  userListElement.append(newUserElement);
});
