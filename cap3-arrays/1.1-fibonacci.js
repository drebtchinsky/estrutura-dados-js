const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
// for (let j = 1; j < fibonacci.length; j++) {
//   console.log(fibonacci[j]);
// }
