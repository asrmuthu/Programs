function x() {
    console.log('aa');
}
function abc(x) {
    console.log('abc');
    x();  // Calling the function passed as an argument
}
abc(x);
//output abc , aa
