const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

let numbers2 = Array.from(numbers);
let evens = Array.from(numbers, (x) => x % 2 == 0);

console.log(numbers, numbers2, evens);

function from(array, fn) {
  if (!!fn) {
    return array.map((x) => fn(x));
  }
  return array;
}
let numbers3 = from(numbers);
let evens2 = from(numbers, (x) => x % 2 == 0);

console.log(numbers, numbers2, evens);
