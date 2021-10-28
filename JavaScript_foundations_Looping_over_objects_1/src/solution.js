/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  for (let cartItems in cart) {
    const item = cart[cartItems];
    const price = item.priceInCents;
    const count = item.quantity;
    total += price * count;
  }
  return total;
}

function printCartInventory(cart) {
  const inventory = [];
  for (let cartItems in cart) {
    const item = cart[cartItems];
    const count = item.quantity;
    inventory.push(`${count}x${cartItems}`);
  }
  return inventory.join('\n');
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
