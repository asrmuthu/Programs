let addButton = document.getElementById("addBtn");
let inputBox = document.getElementById("inputBox");
let taskContainer = document.getElementById("taskContainer");
inputBox.addEventListener("keyup", handleEnter);
addButton.addEventListener("click", addTask);
let ParentElement = document.createElement("div");
let newElement = document.createElement("p");
let editBtn = document.createElement("button");

function createTask(userInput){
  newElement.innerText =userInput;
  editBtn.innerText ="Edit";
  taskContainer.append(ParentElement);
  ParentElement.append(newElement);
  ParentElement.append(editBtn);
  newElement.setAttribute("class", "task");
  editBtn.setAttribute("id", "editBtn"); 
  ParentElement.setAttribute("class", "ptr");
  
}

function addTask(ParentElement, newElement, editBtn ) {
  userInput = inputBox.value;
  return createTask(userInput)
 }

let iseditBtnclick = false;

editBtn.onclick = function() {
  if(iseditBtnclick === false ){
  newElement.contentEditable = true;
  newElement.style.backgroundColor = "red";
  iseditBtnclick = true;
  }

  else{
  newElement.contentEditable = false;
  newElement.style.backgroundColor = "yellow";
  iseditBtnclick = false;
  }
  
}

function handleEnter(e) {
  if (e.keyCode === 13) addTask();
}




