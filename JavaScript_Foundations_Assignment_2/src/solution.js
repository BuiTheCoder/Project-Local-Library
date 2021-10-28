/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let response = null;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name && product.availableSizes.includes(size) ) {
      response = product;
    }
  }
  return response;
}

function addProductToCart(product, cart = {}) {
  for (let name in product) {
  }
  return cart;
}

function calculateTotal(cart) {
  let total = 0;
  for (let name in cart) {
    const item = cart[name];
    const { quantity , priceInCents } = item;
    total += quantity * priceInCents;
  }
  return total;
}

function printReceipt(cart) {
  if (cart === 0) return null;
  let response = [];
  for (let name in cart) {
    let item = cart[name];
    const { quantity , priceInCents } = item;
    let price = printablePrice(priceInCents * quantity);
    response.push(`${quantity}x${name} - ${price}`);
  }
  const cartTotal = calculateTotal(cart);
  const cartInDollars = (cartTotal / 100).toFixed(2)
  response.push(`Total: $${cartInDollars}`);
  return response.join("\n");
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
