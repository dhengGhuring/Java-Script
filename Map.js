// Map is type data like object but can contain more key of type data.
// To use Map you must using this construct
const myMap = new Map([
  ["Dheng", "Mistom", 10, 100],
  [true, false],
  [1.0, "Hello"],
]);

// To pick data use get
console.log(myMap.get("Dheng"));
// To add data use set
myMap.set("Hasyim", "Ghuring");
console.log(myMap);
