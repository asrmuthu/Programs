let person = {
    nam: "Muthu",
    age: 27,
    Native: "Theni",
    "1"  : "value1",
    "my choise": "value2",
    habits : ["chess", "cricket", "hocky"],
    car : {
        color: "blue",
        nam : "Audi"
    }
}
console.log(person.nam);
console.log(person['nam']);
console.log(person['1']);
console.log(person['my choise']);
let a = "nam";
console.log(person[a]);
let { nam, age } = person;
console.log("object destructuring", nam);
console.log("object destructuring", age);
person.nam = "Renu";
console.log(person.nam);
person.gender = "Male"
console.log(person.gender);
console.log(person.habits[0]);
console.log(person.car.nam);