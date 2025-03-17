let numbers = [2, 3, 7, 8, 8, 7, 1, 3, 1];
let repeatedNum = numbers.filter(num => numbers.lastIndexOf(num)); 
console.log(repeatedNum); // [3, 7, 8, 8, 7, 1, 3, 1]
let uniqueRepeatedNum = [...new Set(repeatedNum)];
console.log(uniqueRepeatedNum); // [3, 7, 8, 1]