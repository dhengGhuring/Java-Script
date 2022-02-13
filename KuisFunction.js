function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else if (a == b) {
    return a;
  }
}

function power(a, b) {
  return a ** b;
}

console.log(minimal(5, 20));
console.log(power(5, 10));
