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

Array.prototype.addItensToPosition = function (position, ...itens) {
  for (let i = this.length + itens.length - 1; i >= position; i--) {
    this[i] = this[i - itens.length];
  }
  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];
    this[position + i] = item;
  }
};

Array.prototype.removeItemFromPosition = function (
  position,
  size = 1,
  ...itens
) {
  //remove itens
  for (let i = position; i < this.length; i++) {
    this[i] = this[i + size];
  }

  //adiciona novos itens
  this.addItensToPosition(position, ...itens);
  return this.reindex(this);
};
console.log(numbers);
numbers.addItensToPosition(3, -1, -2, -3);
console.log(numbers);
numbers = numbers.removeItemFromPosition(3, 3, 9, 6, 8);
console.log(numbers);
numbers.splice(3, 1, -1, -2, -3);
console.log(numbers);
