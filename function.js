// function greeting() {
//   console.log("Hello World");
// }
// greeting();

function greeting(name, language) {
  if (language == "English") {
    return `Good Morning ${name}!`;
  } else if (language == "Muslim") {
    return `Assalamualaikum ${name}`;
  } else if (language == "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}
let greetingMessage = greeting("Red", "English");
console.log(greetingMessage);

// function multiply(a, b) {
//   return a * b;
// }
// let result = multiply(10, 10);
// console.log(result);

console.log("====================================");

const traffic = function (color, name) {
  if (color == "red") {
    return `Stop! ${name}`;
  } else if (color == "orange") {
    return `Ready your gas${name}`;
  } else {
    return `Hit the gass ${name}`;
  }
};
let trafficLight = traffic("red", "driver");
console.log(trafficLight);

console.log("====================================");

const user = {
  id: 123,
  displayName: "Dheng",
  fullName: "Dheng Ghuring",
};
function introduce({ displayName, fullName }) {
  console.log(displayName, fullName);
  console.log(`${displayName}, is ${fullName}`);
}
introduce(user);

console.log("====================================");
console.log("Arrow Function");
// arrow function
const greet = (status, names) => {
  if (status == "log in") {
    return `Hello ${names}`;
  } else if (status == "relog") {
    return `Welcome Back ${names}!`;
  } else {
    return `Miss You`;
  }
};
let getGreeting = greet("Mistom", "log in");
console.log(getGreeting);
