// Make character game
class Character {
  constructor(name, hp, strenght) {
    this.name = name;
    this.hp = hp;
    this.strenght = strenght;
  }
  move() {}
  stand() {
    return `${this.name} is stand!`;
  }
  fight() {}
}
class Player extends Character {
  constructor(name, hp, strenght) {
    super(name, hp, strenght);
  }
  move() {
    return `${this.name} is move!`;
  }
  fight() {
    if (true) {
      console.log(`${this.name} is fight!`);
    }
  }
}
const player1 = new Player('Wyvren', 100, 350);
console.log(Character);
console.log(player1.move());
console.log(player1.fight());
