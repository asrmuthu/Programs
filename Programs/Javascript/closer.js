function outer(name) {
    // outer function defines a local variable and an inner function
    let outerVar = "I am from outer";
    // inner function has access to both outerVar and name (from outer function)
    function inner() {
      console.log(outerVar);  // logs outerVar from the outer function's scope
      console.log(name);      // logs the argument name passed to outer()
    }
    // outer function returns the inner function
    return inner; 
  }
  // Creating closureFunction by calling outer() with 'muthu' as the argument
  const closureFunction = outer('muthu'); 
  // Calling closureFunction will execute the inner function
  closureFunction(); 
  // Creating closureFunction1 by calling outer() with 'pandi' as the argument
  const closureFunction1 = outer('pandi'); 
  // Calling closureFunction1 will execute the inner function
  closureFunction1(); 
  // Calling closureFunction again (the second time)
  closureFunction(); 
  // Calling closureFunction1 again (the second time)
  closureFunction1();
  