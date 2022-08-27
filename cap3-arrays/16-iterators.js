const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

for (const n of numbers) {
  console.log(n % 2 === 0 ? "even" : "odd");
}

let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

for (const n of iterator) {
    console.log(n)
}