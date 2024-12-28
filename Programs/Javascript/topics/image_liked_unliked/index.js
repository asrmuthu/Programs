let likeButtonElement = document.getElementById("likeButton");
let isImaLiked = false;

function onClickLikeButton() {
    if (isImaLiked === false) {
        likeButtonElement.style.backgroundColor = "#0967d2";
        isImaLiked = true;
    } 
    else {
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        isImaLiked = false;
    } 
}