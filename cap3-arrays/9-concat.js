const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbers1 = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers1);

Array.prototype.junta = function (...arrays) {
  const newArray = this;
  for (let i = 0; i < arrays.length; i++) {
    const element = arrays[i];
    if (eArray(element)) {
      for (let j = 0; j < element.length; j++) {
        newArray[newArray.length] = element[j];
      }
    } else {
      newArray[newArray.length] = element;
    }
  }
  return newArray;
};

eArray = function (array) {
  if (array.length) {
    return true;
  }
  return false;
};

let numbers2 = negativeNumbers.junta(zero, positiveNumbers);
console.log(numbers2);
