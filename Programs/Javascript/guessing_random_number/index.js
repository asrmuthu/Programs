let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let userInput = document.getElementById("userInput");
let userInputDisplay = document.getElementById("userInputDisplay");
let randomNumberDisplay = document.getElementById("randomNumberDisplay");
let gameResult = document.getElementById("gameResult");


function checkGuess() {
let userInputText =Number(userInput.value);

if(userInputText){
if (userInputText === randomNumber){
    userInputDisplay.textContent = "Your Input Number is " + userInputText;
    randomNumberDisplay.textContent = "Random Number is " + randomNumber;
    gameResult.textContent = "Congrats You Guessed Correct Number ";
    gameResult.style.color = "grean";
}
else if (userInputText !== randomNumber){
    userInputDisplay.textContent = "Your Input Number is " + userInputText;
    randomNumberDisplay.textContent = "Random Number is " + randomNumber;
    gameResult.textContent = "You Guessed Not Correct Number. Butter luck Next Time! ";
    gameResult.style.color = "red";
}
}

else {
    alert("String not allowed!. So, Please Enter Number");
    }
}