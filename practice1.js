// Check stock items
console.log("==========================");
console.log("Show List Of Stock Items");
console.log("==========================");

let items = {
  stationary: {
    nameItem: "Pencil",
    stock: 20,
  },
  electronic: {
    nameItem: "Mouse",
    stock: 10,
  },
};

// console.log(`Stock item Stationary ${stationary.nama} = ${stationary.stock}`);

const stock = (nameItems, name, stock) => {
  if (stock == 0) {
    // return `Stock item ${items.stationary.nameItem} = ${name} was empty!`;
    return `Stock item ${nameItems} = ${name} was empty!`;
  } else if (stock <= 5) {
    return `Stock item ${nameItems} = ${name} less!`;
  } else {
    return `Stock item ${nameItems} = ${name} still many`;
  }
};
let checkStock = stock("Electronic", "Mouse", 5);
console.log(checkStock);
