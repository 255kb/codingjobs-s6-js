/**
 * Week end exercise
 *
 * Product list and shopping cart.
 * This exercise is quite long so people who have time can experiment a bit further.
 * Getting right the first part is already really good.
 * Bonuses are optionals.
 *
 * - create an array of products objects (id, name, description, quantity, etc, whatever you want. The 'id' can be something simple like a number)
 * - display the list of products on the page, in separated new elements
 * - add an 'add to cart' button element on each product
 * - add a 'click' event listener on each button
 * - when the button is clicked, add the name of the product in a 'cart' array (list)
 * - display the cart array items somewhere else in the page, in a "div.cart" element for example
 *
 *
 * Bonus
 * - Instead of adding the names of the products in the cart array, try to add the product id.
 * - then display the cart content on the page like before, but display the name of the product instead of the id.
 * Hint: you may need to use a array.find method
 *
 *
 * Bonus 2:
 * - instead of only adding the id of the product in the cart array, try to add an object with the id and the number of times the product was added to the array
 * - in the div.cart element on the page, display the name of the product and the number of times it was added in the cart.
 *
 * Bonus 3:
 * - Add a "remove from the cart" button next to each cart item
 * - add an event listener on each of these buttons
 * - when clicked you should remove one of this item from the cart (if one carrot is removed, and 3 were added to the cart, we now have 2)
 * - when reaching 0, you should completely remove the item from the cart
 *
 *
 *
 *
 * Documentation/concepts to check/explore a little bit if you have time:
 * - Node.js, NPM (JS package manager)
 * - what is a JS library (jQuery, etc.)
 * - what is a JS framework (Angular, Vue, React)
 * - what is an API (ajax calls)
 */

let products = [
  {
    id: 123,
    name: "carrots",
  },
  {
    id: 456,
    name: "potatoes",
  },
];
let cart = [];

// add an item to the cart
const addToCart = (product) => {
  const cartProduct = cart.find((cartItem) => {
    return product.id === cartItem.id;
  });

  if (cartProduct !== undefined) {
    cartProduct.quantity++;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }
  refreshCart();
};

const refreshCart = () => {
  document.querySelector(".cart").innerText = "";

  cart.forEach((cartProduct) => {
    const productName = products.find((product) => {
      return product.id === cartProduct.id;
    }).name;
    // shorthand version (no return, no curly braces)
    /*
        const productName = products.find(product => product.id === productId).name;
    */
    document.querySelector(
      ".cart"
    ).innerText += `Name: ${productName}  Quantity: ${cartProduct.quantity}`;
  });

  console.log(cart);
};

const displayProducts = () => {
  products.forEach((product) => {
    // create new element
    const productEl = document.createElement("div");
    productEl.innerText = product.name;
    document.querySelector(".productList").appendChild(productEl);

    const cartBtn = document.createElement("button");
    cartBtn.innerText = "Add to cart";
    productEl.appendChild(cartBtn);

    cartBtn.addEventListener("click", () => {
      addToCart(product);
    });
  });
};

displayProducts();

// add the cart button to each product

// foreach method "equivalent"
const forEach = function (callbackFunction) {
  const array = [1, 2, 3];

  for (let index = 0; index < array.length; index++) {
    callbackFunction(array[index], index);
  }
};

const cbFunc = (param1, param2, param3) => {
  console.log("inside the callback", param1, param2, param3);
};

forEach(cbFunc);
