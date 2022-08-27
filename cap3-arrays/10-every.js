function isEven(x) {
  console.log(x);
  return x % 2 === 0 ? true : false;
}
const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

numbers.every(isEven);

Array.prototype.cada = function (fn) {
  for (let i = 0; i < this.length; i++) {
    const element = !!fn(this[i]);
    if (!element) {
      return;
    }
  }
};
numbers.cada(isEven);
