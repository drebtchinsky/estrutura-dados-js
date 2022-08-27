function isEven(x) {
  return x % 2 === 0 ? true : false;
}
const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

const map1 = numbers.map(isEven);
console.log(map1);

Array.prototype.mapa = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    newArray[newArray.length] = fn(element, i, this);
  }
  return newArray;
};
const map2 = numbers.mapa(isEven);
console.log(map2);
