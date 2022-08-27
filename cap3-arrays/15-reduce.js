const numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

const reduce1 = numbers.reduce((prev, curr) => prev + curr);
console.log(reduce1);

Array.prototype.reduzir = function (fn) {
  let retorno = null;
  for (let i = 0; i < this.length; i++) {
    retorno = fn(retorno, this[i], i, this);
  }
  return retorno;
};

const reduce2 = numbers.reduzir((prev, curr) => prev + curr);
console.log(reduce2);
