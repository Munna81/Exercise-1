const inventory = [
  {
    id: 001,
    name: 'I phone',
    price: 500,
    quantity: 10,
  },
  {
    id: 002,
    name: 'galaxy',
    price: 250,
    quantity: 30,
  },
  {
    id: 003,
    name: 'Lumia',
    price: 100,
    quantity: 20,
  },
]

function addProduct(id, name, quantity, price) {
  let newProduct = {
    id: id,
    name: name,
    quantity: quantity,
    price: price,
  }

  inventory.push(newProduct)
}

function toDeletedId(id) {
  const index = inventory.findIndex((arr) => arr.id == id)
  return delete inventory[index]
}

function toUpdatedElement(id, updatedQuantity) {
  const index = inventory.findIndex((arr) => arr.id == id)
  inventory[index].quantity =
    updatedQuantity !== undefined ? updatedQuantity : inventory[index].quantity
}
console.log(inventory)

addProduct(007, 'munna', 420, 000)
toDeletedId(003);
toUpdatedElement(001, 400);
