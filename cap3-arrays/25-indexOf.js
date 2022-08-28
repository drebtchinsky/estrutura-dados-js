const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10)

console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));