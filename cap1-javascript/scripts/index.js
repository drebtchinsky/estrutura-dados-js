var numb = 1;
numb = 3;
var price = 1.5;
var myName = "Packt";
var trueValue = true;
var nullable = null;
var und;

console.log(
  "-------------------------------------------------------------------------------"
);
console.log("Variáveis");
console.log("num: ", numb);
console.log("typeof num: ", typeof numb);
console.log("price: ", price);
console.log("typeof price: ", typeof price);
console.log("myName: ", myName);
console.log("typeof myName: ", typeof myName);
console.log("trueValue: ", trueValue);
console.log("typeof trueValue: ", typeof trueValue);
console.log("nullable: ", nullable);
console.log("typeof nullable: ", typeof nullable);
console.log("und: ", und);
console.log("typeof und: ", typeof und);
console.log("typeof [1,2,3]: ", typeof [1, 2, 3]);
console.log("typeof {name:'John'}: ", typeof { name: "John" });

console.log(
  "-------------------------------------------------------------------------------"
);
console.log("Escopo");

var myVar = "global";
myOtherVar = "global";

function myFunction() {
  var myVar = "local";
  return myVar;
}

function myOtherFunction() {
  myOtherVar = "local";
  return myOtherVar;
}

console.log(myVar);
console.log(myFunction());
console.log(myOtherVar);
console.log(myOtherFunction());
console.log(myOtherVar);
console.log(
  "-------------------------------------------------------------------------------"
);

console.log("Operadores");

console.log("\n\nOperadores de atribuição e aritméticos");
let num = 0;
console.log(num);
num = num + 2;
console.log(num);
num = num * 3;
console.log(num);
num = num / 2;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);
num += 1;
console.log(num);
num -= 2;
console.log(num);
num *= 3;
console.log(num);
num /= 3;
console.log(num);
num %= 3;
console.log(num);
console.log("\n\nOperadores de comparação");
console.log("num == 1 : ", num == 1);
console.log("num === 1 : ", num === 1);
console.log("num != 1 : ", num != 1);
console.log("num > 1 : ", num > 1);
console.log("num < 1 : ", num < 1);
console.log("num >= 1 : ", num >= 1);
console.log("num <= 1 : ", num <= 1);
console.log("\n\nOperadores de lógicos");
console.log("true && false : ", true && false);
console.log("true || false : ", true || false);
console.log("!true : ", !true);
console.log("\n\nOperadores de bitwise(bit a bit)");
console.log("5 & 1:", 5 & 1);
console.log("5 | 1:", 5 | 1);
console.log("~5:", ~5);
console.log("5 ^ 1:", 5 ^ 1);
console.log("5 << 1:", 5 << 1);
console.log("5 >> 1:", 5 >> 1);
