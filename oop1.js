class Mail {
  constructor() {
    this.from = "pengirim@gmail.com";
    this.contacts = [];
  }
  sendMessage(msg, to, from) {
    console.log(`You send ${msg} to ${to} from ${from}`);
    this.contacts.push(to);
  }
}

class Cat {
  constructor() {
    this.furColor = "";
    this.age = 20;
    this.gender = "";
  }
  static animal(age) {
    return typeof age === "number";
  }
  catRun(msg, to) {
    console.log(`Say : ${msg} to ${to}`);
  }
}
const cat1 = new Cat();
cat1.catRun("Run Kitty", "Kitty");
Cat.animal(20);
