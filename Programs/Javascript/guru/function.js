function addNumbers(fnum, snum){
    return fnum + snum;
}
let result = addNumbers(10, 11);
console.log(result);
let result1 = addNumbers(result, 10);
console.log(result1);

function findEven(num){
    if(num % 2 ===0){
        return true;
    }
    return false;
}
let isEven = findEven(22);
console.log(isEven);
