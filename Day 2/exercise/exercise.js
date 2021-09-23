/**
 * Exercise:
 * You decide the preconditions: is the array sorted in ascending or descending order, etc.
 *
 * - display a list of blog posts in the page
 * - create inputs, with a button to add a blog post, maybe with title and text content?
 * - pressing the button add the blog post to the list on the page
 *
 * Bonus
 * - add the blog post at the top of the list
 *
 * Extra bonus
 * - add a sorting button, asc/desc --> only one function to use
 * - if you want you can add more properties to the blog posts (id, date, etc.), and sort using them
 */

const posts = [
  {
    title: "title 1",
    desc: "lorem ipsum ",
  },
  {
    title: "title 2",
    desc: "lorem ipsum ",
  },
];
const listElement = document.querySelector(".list");

const createPostElement = function (postObject) {
  const postElement = document.createElement("div");

  const postTitleElement = document.createElement("h2");
  postTitleElement.innerText = postObject.title;

  const postDescElement = document.createElement("p");
  postDescElement.innerText = postObject.desc;

  postElement.appendChild(postTitleElement);
  postElement.appendChild(postDescElement);

  listElement.appendChild(postElement);
};

const displayBlogPosts = function () {
  listElement.innerHTML = "";
  posts.forEach((post) => {
    createPostElement(post);
  });
};

displayBlogPosts();

const saveButton = document.querySelector("button#save");
const sortButton = document.querySelector("button#sort");

saveButton.addEventListener("click", () => {
  const newPost = {
    title: document.querySelector("input[name=title]").value,
    desc: document.querySelector("input[name=desc]").value,
  };

  posts.unshift(newPost);
  console.log(posts);
  displayBlogPosts();
});

sortButton.addEventListener("click", () => {
  posts.reverse();
  displayBlogPosts();
});
