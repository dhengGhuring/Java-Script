const priceJPY = 5000;
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);
let priceIDR = currency.get("JPY") * priceJPY;
console.log(priceIDR);
