// Destruct Object can work if you want to split value of object

let dataCat = {
  name: "Pussy",
  age: 12,
  gender: "Female",
};

let dataDog = {
  name2: "Husky",
  age2: 15,
  gender2: "Male",
};

//this the important syantax of destruct
let { name, age, gender } = dataCat;
// console.log(name, age, gender);
console.log(`Name : ${name}`, `Age : ${age}`, `Gender : ${gender}`);

console.log("===============================");

// the name of variable below must same like in property object dataCat
// if you want to change variable you must add : and new name variable
let { name2: nama, age2: umur, gender2: jenisKelamin } = dataDog;
console.log(nama, umur, jenisKelamin);
