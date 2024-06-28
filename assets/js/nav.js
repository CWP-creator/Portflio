var isDarkMode = false;

function myfunction() {
var navtextElements = document.querySelectorAll(".active");
var navElement = document.getElementById("theememem");
var imgElement = document.getElementById("themeh");
var bodyElement = document.body;

if (isDarkMode) {
    for (var i = 0; i < navtextElements.length; i++) {
        navtextElements[i].style.color = "black";
    }
    navElement.style.backgroundColor = "white";
    navElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
    imgElement.src = "../assets/img/dark.webp";
    bodyElement.style.backgroundColor = "#f0f8ff";
} else {
    for (var i = 0; i < navtextElements.length; i++) {
        navtextElements[i].style.color = "white";
    }
    navElement.style.backgroundColor = "#101720";
    navElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
    imgElement.src = "../assets/img/light3.png";
    bodyElement.style.backgroundColor = "#0b1215";
}
isDarkMode = !isDarkMode;
}
