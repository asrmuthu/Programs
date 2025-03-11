function outer() {
    var x = 20;
    function inner() {
        console.log(x + 4); // Inner function accessing `x`
    }
    inner(); // Call `inner()` inside `outer()`
}
outer(); // Output: 24
