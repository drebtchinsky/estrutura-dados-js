let numbersCopy = Array.of(1,2,3,4,5,6);
numbersCopy.fill(0);

console.log(numbersCopy);

numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(2,1);

console.log(numbersCopy);

numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(1,3,5);

console.log(numbersCopy);

let ones = Array(6).fill(1);
console.log(ones);