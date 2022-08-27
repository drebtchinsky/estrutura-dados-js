const numbers1 = Array.of(1);
const numbers2 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers1);
console.log(numbers2);
let numbersCopy = Array.of(...numbers2);
console.log(numbersCopy);
