let myArray = [1, "two", "three", 4, 5]; //array
console.log(myArray); //[1, "two", "three", 4, 5]
myArray[1] = 2;  // replace or add
console.log(myArray); //[1, 2, "three", 4, 5]
let myArrayLength = myArray.length; // arravy length
console.log(myArrayLength); //5
myArray.push("last array value");// last position add
console.log(myArray);//[1, "two", "three", 4, 5,'last array value']
let lastItem = myArray.pop(); // last position delete
console.log(myArray); // [1, 2, "three", 4, 5]
let sortArravy = myArray.sort(); // sort the array
//reverse() - reverse the arravy
console.log(sortArravy); // [1, 2, 4, 5, "three"];
let joinArray = myArray.join("*"); //add between array
console.log(joinArray); //1*2*4*5*three
let shiftArray = myArray.shift(); // remove first arravy
console.log(shiftArray); // 1
console.log(myArray); //[]
let unshiftArray = myArray.unshift(10);// add first arravy
console.log(unshiftArray); // 5
console.log(myArray);//[10, 2, 4, 5, "three"]
let myArray1 = [6, true, 7]; // new array
let myArrayMerge = myArray.concat(myArray1); //merge two arrays or 
//if you want merge more array, myArray.concat(myArray1, myArravy2);
console.log(myArrayMerge); // [10, 2, 4, 5, "three", 6, true, 7]
let myArr = [[1,2],[3,4],[5,6]]; // new array
let newArr = myArr.flat(); // merge the arravys inside main arravy
console.log(newArr); //1,2,3,4,5,6
let fruits = ["Banana", "Orange", "Apple", "Mango"]; // new arravy
let spaArravy = fruits.splice(2, 0, "Lemon", "Kiwi"); 
// add new arravys in middle without delete or with delete
//2 - position where new elements should be added.
//0 - defines how many elements should be removed.
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
let citrus = fruits.slice(3); //like supstring-after,delete after
console.log(citrus);//["Kiwi", "Apple", "Mango"]
let citrus1 = fruits.slice(2, 5);
// 2 -after the selected
// 5 - still seleted
console.log(citrus1);//["Lemon", "Kiwi", "Apple"]
let points = [40, 100, 1, 5, 25, 10];
console.log(Math.max.apply(null, points));// max value 100
console.log(Math.min.apply(null, points));// min value 1
let presentOrnot = points.includes(5); // that element is present or not
console.log(presentOrnot); //true
