let a = 5, b = 10;
console.log("Before Swap: a =", a, "b =", b);

[a, b] = [b, a];  // Swapping using array destructuring

console.log("After Swap: a =", a, "b =", b);