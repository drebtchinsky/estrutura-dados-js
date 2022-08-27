let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.insertAtLastPosition = function (value) {
  this[this.length] = value;
};
console.log(numbers);
console.log(numbers.length);

numbers.insertAtLastPosition(11);
console.log(numbers);
console.log(numbers.length);

numbers.push(20);
console.log(numbers);
console.log(numbers.length);

