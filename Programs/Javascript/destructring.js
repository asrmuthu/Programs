//Array Destructuring

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(rest);


//Object Destructuring

const person = { fname: "Muthu", age: 30, job:"software", city: "Chennai", country: "India" };
const {fname, ...rest} = person;
console.log(fname);
console.log(person);
console.log(person.job);
