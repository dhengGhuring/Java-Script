class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }
  sendMessage(smg, to) {
    console.log(`You send : ${smg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }
  showAllContacts() {
    return this._contacts;
  }
}
class WhatsApp extends Mail {
  constructor() {
    super();
    this.username = "Dheng Ghuring";
    this.isBussinessAccount = false;
  }
  myProfile() {
    return `My name is ${this.username}, is ${
      this.isBussinessAccount ? "Business" : "Personal"
    } Account`;
  }
}
const wa1 = new WhatsApp(0015545124);
console.log(wa1.myProfile());

console.log("=================================================");

class Animal {
  constructor() {
    this.name = "";
  }
  doEat() {
    console.log(`${this.name} is eating.`);
  }
  doMove() {}
}
class Mammal extends Animal {
  constructor() {
    super();
    this.name = "Elephant";
  }
  doMove() {
    console.log(`${this.name} is walking`);
  }
}
class Bird extends Animal {
  constructor() {
    super();
    this.name = "Bird";
  }
  doMove() {
    console.log(`${this.name} is flying`);
  }
}
class Fish extends Animal {
  constructor() {
    super();
    this.name = "Shark";
  }
  doMove() {
    console.log(`${this.name} is swimming`);
  }
}
class List {}
