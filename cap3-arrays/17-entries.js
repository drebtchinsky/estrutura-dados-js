const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

let aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}