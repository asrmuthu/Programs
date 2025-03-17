let numbers = [2, 3, 7, 8, 8, 7, 1, 3, 1];

let uniqueNum = [...new Set(numbers)];
console.log(uniqueNum); // [2, 3, 7, 8, 1]

let repeatedNum = numbers.filter(num => numbers.lastIndexOf(num)); // [3, 7, 8, 1]


console.log(repeatedNum); // [2, 3, 7, 8, 1]

let unirepeatedNum = [...new Set(repeatedNum)];
console.log(unirepeatedNum); // [3, 7, 8, 1]

