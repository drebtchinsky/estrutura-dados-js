const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

function multipleOf13(element) {
  return element % 13 == 0;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));