let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = "mycheckbox";

document.body.appendChild(inputElement);

let lableElement = document.createElement('label');
lableElement.setAttribute("for", 'mycheckbox');
lableElement.textContent = "gratudated";

document.body.appendChild(lableElement);