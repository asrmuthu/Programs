let randomNumber1 = Math.round(Math.random() * 100);
let randomNumber2 = Math.round(Math.random() * 100);

document.getElementById("randomnum1").innerHTML = randomNumber1;
document.getElementById("randomnum2").innerHTML = randomNumber2;
let checkButton = document.getElementById("checkButton");
let userInput = document.getElementById("userInput");
let displayContant= document.getElementById("p");

randomNum = randomNumber1 + randomNumber2;
function checkAdd() {
    let userInputText = Number(userInput.value);
    if(userInputText === randomNum){
        displayContant.textContent = "Congrts, It is correct";
    }
    else{
        displayContant.textContent = "It is not Correct, Retry";
    }
}

// reset the number

function checkRestart() {
    let randomNumber1 = Math.round(Math.random() * 100);
let randomNumber2 = Math.round(Math.random() * 100);
     displayContant.textContent ="";
    userInput.value = "";
document.getElementById("randomnum1").innerHTML = randomNumber1;
document.getElementById("randomnum2").innerHTML = randomNumber2;
    
}