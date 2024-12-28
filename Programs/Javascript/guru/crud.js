//Dom
//crud -> create,read,ubdate,delete
//element, attribute, styles, events
let userInput = "Task 1";
const newElement1 = document.createElement("div");
newElement1.innerText = userInput;
newElement1.setAttribute("class","task");
const container = document.getElementById("taskContainer");
container.append(newElement1);
const inputBox = document.getElementById("inputbox");
console.log(inputBox.getAttribute("placeholder"));