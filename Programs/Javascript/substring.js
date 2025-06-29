let arr = ["flower", "flow", "flight"]
let arr1 = ["aabbb", "ccbbbb", "ddbbbbb"]
function fn1(a) {
  for (let i = a[0].length; i > 0; i--)
    for (let j = 0; j <= a[0].length - i; j++) {
      let s = a[0].substr(j, i);
      if (a.every((x) => x.includes(s))) return s;
    }
  return "";
}

console.log(fn1(arr)); // "fl"
console.log(fn1(arr1)); // "bbb"

