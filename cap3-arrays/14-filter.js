function isEven(x) {
  return x % 2 === 0 ? true : false;
}
const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

const filter1 = numbers.filter(isEven);
console.log(filter1);

Array.prototype.filtro = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const test = !!fn(element, i, this);
    if (test) {
      newArray[newArray.length] = element;
    }
  }
  return newArray;
};


const filter2 = numbers.filtro(isEven);
console.log(filter2);
