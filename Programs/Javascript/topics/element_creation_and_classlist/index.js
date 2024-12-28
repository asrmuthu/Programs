let h1Element = document.createElement("h1");
h1Element.textContent = "Web technologies";
let changeBtn = document.createElement("button");
changeBtn.textContent = "change";
let resetBtn = document.createElement("button");
resetBtn.textContent = "reset";
let containerElement = document.getElementById("container");
containerElement.appendChild(h1Element);
containerElement.appendChild(changeBtn);
containerElement.appendChild(resetBtn);

changeBtn.classList.add("btn1");
resetBtn.classList.add("btn");


changeBtn.onclick = function() {
    h1Element.textContent = "INFO TECH";
    h1Element.classList.add("heading");
    console.log(h1Element);
};

resetBtn.onclick = function() {
    h1Element.textContent = "Web technologies";
    h1Element.classList.remove("heading");
    h1Element.removeAttribute('class');
    console.log(h1Element);
};

