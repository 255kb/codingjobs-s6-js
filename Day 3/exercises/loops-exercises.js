/**
 * Exercise 1:
 * find a way to get 'title 1' and 'aaaa' from the object inside the for..in loop
 *
 */
const article = {
  title: "title 1",
  text: "aaaa",
};
for (const key in article) {
  console.log(key);
}
