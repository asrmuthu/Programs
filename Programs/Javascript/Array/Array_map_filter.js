let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]