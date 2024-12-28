let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let defaultImageWidth = "200px";
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = defaultImageWidth;
imageWidthElement.textContent = defaultImageWidth;

function onIncrement() {
    let previousImageWidth = imageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger >= imageMaxWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        let updatedImageWidth = previousImageWidthInteger + 5 + "px";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    let previousImageWidth = imageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger <= imageMinWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        let updatedImageWidth = previousImageWidthInteger - 5 + "px";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}