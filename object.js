let user = {
  name: "Dheng Ghuring",
  position: "Full Stack Developer",
  number: 220,
  age: 21,
};
console.log(`Hello my name is ${user.name}`);
console.log(`I am in ${user.position}`);
console.log(`My number is ${user.number}`);
console.log(`I am ${user.age} years old.`);

console.log("------------------------------------");

const id = {
  name: "Ridho",
  position: "Full Stack Developer",
  number: 110,
  age: 21,
  status: "WFO",
};
console.log(`The member name is ${id.name}`);
console.log(`I am in ${(id.position = "Web Developer")}`);
console.log(`I am ${id.age} years old`);
delete id.status;
