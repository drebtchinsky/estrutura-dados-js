const names = ["Ana", "ana", "john", "John"];
names.sort();
console.log(names);

names.sort();
console.log(names);

function compareName(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}


names.sort(compareName);
console.log(names);

names.sort((a,b)=>a.localeCompare(b));
console.log(names);
