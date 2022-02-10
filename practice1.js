// Check stock items
console.log("==========================");
console.log("Show List Of Stock Items");
console.log("==========================");

let stationary = {
  nama: "Pencil",
  stock: 20,
};

// console.log(`Stock item Stationary ${stationary.nama} = ${stationary.stock}`);

const stock = (name, stock) => {
  if (stock == 0) {
    return `Stock item Stationary = ${name} was empty!`;
  } else if (stock < 5) {
    return `Stock item Stationary = ${name} less!`;
  } else {
    return `Stock item Stationary = ${name} still many`;
  }
};
let checkStock = stock("Pencil", 0);
console.log(checkStock);
