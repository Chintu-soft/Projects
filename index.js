let leftArrow = document.getElementById("LeftArrow");
let rightArrow = document.getElementById("RightArrow");
let slide = document.getElementById("slide");

let x = 0;
rightArrow.onclick = function() {
    if (x > "-1200") {
        x = x - 300;
        slide.style.top = x + "px";
    }
};
leftArrow.onclick = function() {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + "px";
    }
};