var a;
var b;
var c;
//You can assign anything to it, and assign it to anything else
//You can assign anything to it, but must check before using
var f; //Something is missing or not yet defined
var g; //Something is explicitly set to nothing
var h = [1, 2, 3]; //Array of numbers
var i = [1, 'a', true]; //Array of any type
var j = [1, 'a']; //Tuple with a number and a string
var id; // Union type: id can be either a string or a number
id = 123;
id = "abc";
function greet(name) {
    return "Hello, ".concat(name);
}
greet("World"); // ✅ Returns "Hello, World"
