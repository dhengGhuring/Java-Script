console.log("Data Animal");
console.log("===============");

let owener = ["Dheng", "Mistom", "Munahwi", "Ragnala"];
let animals = ["cat", "dog", "monkey", "bird"];

let animalData = [...owener, ...animals];

const cat = {
  name1: "Pussy",
  age1: 15,
  gender1: "male",
  food_favorite1: "fish",
};
const monkey = {
  name2: "Apin",
  age2: 20,
  gender2: "female",
  food_favorite2: "fruits",
};

const dataList = { ...cat, ...monkey };
console.log(animalData);
console.log(dataList);
