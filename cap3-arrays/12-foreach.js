const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}
numbers.forEach((x) => console.log(x % 2 === 0));

Array.prototype.paraCada = function (fn) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    fn(element, i, this);
  }
};
numbers.paraCada((x, i, a) => console.log(x, i, a));
