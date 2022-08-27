const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

let aKeys = numbers.keys();
for (const n of aKeys) {
  console.log(n);
}
