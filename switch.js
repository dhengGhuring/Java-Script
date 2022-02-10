console.log("Type of animal based on food");
let fruit = "Chicken";
let answear;

switch (fruit) {
  case "Lion":
    answear = "Lion consume meal its mean their Karnivora";
    break;
  case "Elephant":
    answear = "Elephant consume vegetable its mean their Herbivora";
    break;
  case "Chicken":
    answear = "Chicken consume anything its mean their Omnivora";
    break;
  default:
    answear = "Nothing animals input yet";
    break;
}
console.log(answear);
