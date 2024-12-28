let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function TurnOnstop(){
    stopLight.style.backgroundColor ="#cf1124";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";

}

function TurnOnReady(){
    readyLight.style.backgroundColor ="#f7c948";   
    stopLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function TurnOnGo(){
    goLight.style.backgroundColor ="#199473";
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    
}

function reset(){
    goLight.style.backgroundColor ="#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    
}