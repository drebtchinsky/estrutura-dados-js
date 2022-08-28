const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

numbers.sort(compare);
console.log(numbers);