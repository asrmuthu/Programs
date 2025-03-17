let arr1 = [1, 2, 3, 5, 8];
let arr2 = [1, 2, 8];

// Find common values
const commonVal = arr1.filter(num => arr2.includes(num));
console.log(commonVal); // Output: [1, 2, 8]

// Find values in arr1 that are not in arr2
const diffVal = arr1.filter(num => !arr2.includes(num));
console.log(diffVal); // Output: [3, 5]
