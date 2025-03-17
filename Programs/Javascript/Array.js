let arr0 = [1, 5, 8, 3, 4, 7]
let arr1 = [4, 5, 8, 1, 2, 3]

let mergeArr = [...arr0, ...arr1]
 console.log(mergeArr);

let uniqueArr = [...new Set(mergeArr)];

console.log(uniqueArr);

let muthu = uniqueArr.sort((a, b) => a - b)

console.log(muthu);

let arr = [1, 2, 3];

// Add elements
arr.push(4);   // [1, 2, 3, 4] (Add at end)
arr.unshift(0); // [0, 1, 2, 3, 4] (Add at start)

// Remove elements
arr.pop();     // [0, 1, 2, 3] (Remove last)
arr.shift();   // [1, 2, 3] (Remove first)




