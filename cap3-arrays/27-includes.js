const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

console.log(numbers.includes(10));
console.log(numbers.includes(20));

const numbers2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers.includes(4, 5));
console.log(numbers.includes(4, 1));
