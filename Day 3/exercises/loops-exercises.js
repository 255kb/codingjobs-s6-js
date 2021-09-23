const article = {
  title: "title 1",
  text: "aaaa",
};

/**
 * Exercise 1:
 * find a way to get 'title 1' and 'aaaa' from the object inside the for..in loop
 *
 */
for (const key in article) {
  console.log(article[key]); // solution was to use the bracket notation: article[key]
}

/**
 * Exercise 2
 *
 * Use Object.values and iterate/loop on the article values and display them with a console.log
 */
Object.values(article).forEach(value => {
  console.log(value);
});
