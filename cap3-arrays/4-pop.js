let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.reindex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeLastItem = function () {
  const lastIndex = this.length - 1;
  this[lastIndex] = undefined;
  return this.reindex(this);
};
console.log(numbers);
numbers.removeLastItem();
console.log(numbers);
numbers = numbers.removeLastItem();
console.log(numbers);
numbers.pop();
console.log(numbers);
