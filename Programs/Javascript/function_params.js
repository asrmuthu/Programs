function greet(name) {
 if (name === undefined) {
 console.log("Hello, guest!");
 } else {
 console.log("Hello, " + name);
 }
}

greet();
greet("Amrutha");
greet("Vineeth", "How are you?");