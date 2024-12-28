let inputValue = document.getElementById("inputValue");
let displayPara = document.getElementById("loading");

function loginbtn() {
   let userInput = inputValue.value;
    let paragraph = "Hi " + userInput + "!, loading";
    displayPara.textContent = paragraph;
    
}