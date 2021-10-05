/**
 * Exercise:
 *
 * - Create an HTML form to create/insert a new pet in the pet store API
 * - only ask for the pet name and status (radio button with "available" and "unavailable") in the form
 * - send the newPet object with the name and status gathered from the form
 *
 * Data would need to be sent to this URL with a POST:
 * https://petstore3.swagger.io/api/v3/pet
 */
const newPet = {
  id: 10,
  name: "",
  category: {
    id: 1,
    name: "Dogs",
  },
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "string",
    },
  ],
  status: "",
};

$("form").on("submit", function (event) {
  event.preventDefault();

  // using serialize will be a little bit cumbersome as we will get a string of key values
  console.log($(this).serialize());
  newPet.name = $('input[name="name"]').val();
  newPet.status = $('input[name="status"]:checked').val();

  $.post("https://petstore3.swagger.io/api/v3/pet", newPet, function () {
    console.log("everything was ok");
  });
});

/**
 * Functions:
 * - write a function that creates and returns a new product JS object with an id and a name
 */
const addPrefix = function (name) {
  return "inventory-" + name;
};

const newProduct = function (id, name) {
  return {
    id: id,
    name: addPrefix(name),
  };
};

const p1 = newProduct(1, "product1");
const p2 = newProduct(2, "product2");

console.log(p1, p2);

/**
 * Mistakes
 */
$.get("https://petstore3.swagger.io/api/v3/pet/1", function (data) {
  data.results.forEach((element) => {});
});

/**
 * Sort
 *
 */
const arr = [{ name: "Tom" }, { name: "Steven" }];
console.log(
  arr.sort((itemA, itemB) => {
    if (itemA.name < itemB.name) {
      return -1;
    } else if (itemA.name > itemB.name) {
      return 1;
    } else {
      return 0;
    }

    // shorthand
    // return itemA.name - itemB.name;
  })
);
