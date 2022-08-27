let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.insertAtFirstPosition=function(value){
    for(let i=this.length;i>=0;i--){
        this[i]=this[i-1];
    }
    this[0]=value;
}

console.log(numbers);
console.log(numbers.length);

numbers.insertAtFirstPosition(33);
console.log(numbers);
console.log(numbers.length);

numbers.unshift(44);
console.log(numbers);
console.log(numbers.length);