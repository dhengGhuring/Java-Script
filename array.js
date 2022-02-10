let fruit = ["Apple", "Orange", "Pinapple", "Durian", "Manggo"];
// push for add element from end of array
fruit.push("Banana");
// pop for delete element from end of array
fruit.pop();
// unshift for add element from first element of array
fruit.unshift("Banana");
// shift for delete element from first element of array
fruit.shift();
// delete for delete data from element of array, but still leaving  that position empty
delete fruit[0];
// splice for delete empty element from array
fruit.splice(0, 1);
console.log(fruit);
console.log(fruit[0], fruit[4]);
console.log(`I have ${fruit[3]} on fridge`);
