const friends = [
  { name: "Jhon", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];
console.table(friends);

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
}
friends.sort(comparePerson);
console.table(friends);