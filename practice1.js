// Check stock items
console.log("==========================");
console.log("Show List Of Stock Items");
console.log("==========================");
const stationary = {
  name: "Pencil",
  stock: 0,
};
const Book = {
  name: "Sidu",
  stock: 10,
};
const Electronic = {
  name: "Mouse",
  stock: 3,
};
const KitchenSet = {
  name: "Plate",
  stock: 20,
};
// looping too showing the inside data
for (stationary = 0; stationary <= Object.length; stationary++) {
  console.log;
}

console.log(`List Item Stationary ${stationary.name}`);
console.log(`List Item Book ${Book.name}`);
console.log(`List Item Electronic ${Electronic.name}`);
console.log(`List Item Kitchen Set ${KitchenSet.name}`);
// let [firstitems] = item1;
// console.log(firstitems);
