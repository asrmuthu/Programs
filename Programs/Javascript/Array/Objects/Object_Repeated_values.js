let arr1 = [{ id: 1, name: "B" }, { id: 4, name: "C" }, { id: 2, name: "B" }, { id: 3, name: "C" }];
let arr2 = [{ id: 2, name: "Q" }, { id: 3, name: "C" }, { id: 7, name: "C" }];
// Find common objects based on `id`
let common = arr1.filter(obj1 => arr2.some(obj2 => obj1.id === obj2.id));
console.log(common);
/*Output:
[ { id: 2, name: 'B' }, { id: 3, name: 'C' } ]
*/