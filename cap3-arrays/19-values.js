const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

let aValues = numbers.values();
for (const n of aValues) {
  console.log(n);
}
