
let counterValue = document.getElementById("counterValue");

function increment(){   
    let previousValue = counterValue.textContent;
    let updatedCounterValue = parseInt(previousValue) + 1;
    counterValue.textContent = updatedCounterValue;
    color(updatedCounterValue);
}

function decrement(){
    let previousValue = counterValue.textContent;
    let updatedCounterValue = parseInt(previousValue) - 1;
    counterValue.textContent = updatedCounterValue;
    color(updatedCounterValue);
    
}

function reset(){
    let resetValue = 0;
    counterValue.textContent = resetValue;
    color();
    
}

function color(updatedCounterValue){
    if(updatedCounterValue > 0) {
        counterValue.style.color ="green";

    }
    else if(updatedCounterValue < 0) {
        counterValue.style.color ="red";

    }
    else{
        counterValue.style.color ="black";
    }
}