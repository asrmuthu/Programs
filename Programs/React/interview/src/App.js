const obj1 = {name: "muthu", age : 2}
const obj = Object.entries(obj1);
console.log(obj) //[ [ 'name', 'muthu' ], [ 'age', 2 ] ]

const entries = [ [ 'name', 'muthu' ], [ 'age', 2 ] ]
const obj2 = Object.fromEntries(entries);
console.log(obj2); // { name: 'muthu', age: 2 }
