const _ = require("lodash");

const users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 34 },
  { user: "fred", age: 40 },
  { user: "barney", age: 36 },
];

// Sort by `user` in ascending order and by `age` in descending order.
const newUsers = _.orderBy(users, ["user", "age"], ["asc", "desc"]);

console.log(newUsers);


// run with `node app.js`