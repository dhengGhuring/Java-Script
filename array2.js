console.log("Data Animals");
console.log("===============");
// Spread Operator used for describe element array, also can be used for combine more than two array.
let owner = ["Dheng", "Mistom", "Ragnala"];
let animals = ["Cat", "Dog", "Monkey"];
let food = ["fish", "meal", "banana"];

let dataList = [...owner, ...animals, ...food];

// Spread Operator can be used to object too
let cat = {
  name1: "Pussy",
  age1: 12,
  gender1: "male",
  favorite_food1: "Fish",
};
let dog = {
  name2: "Husky",
  age2: 15,
  gender2: "female",
  favorite_foodi2: "meal",
};
let monkey = {
  name3: "Apin",
  age3: 20,
  gender3: "male",
  favorite_food3: "fruits",
};

let animalData = { ...cat, ...dog, ...monkey };
console.log(dataList);
console.log(animalData);
