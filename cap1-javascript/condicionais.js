const num = 0;
if (num === 1) {
  console.log("num is equal to 1");
} else {
  console.log("num is not equal to 1, the value of num is " + num);
}

let num2 = 1;
if (num2 === 1) {
  num2++;
} else {
  num2--;
}
console.log(num2);
num2 === 2 ? num2-- : num2++;
console.log(num2);
/********************************************************************************************* */
const month = 5;
switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    default:
        console.log('Month is not January, February or March');
}