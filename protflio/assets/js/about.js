
var isDarkMode = false;

function myfunction() {
    var navtextElements = document.querySelectorAll(".active");
    var navElement = document.getElementById("theememem");
    var imgElement = document.getElementById("themeh");
    var bodyElement = document.body;
    var aboutElement = document.querySelector(".about-content");
    var abouttextElement = document.querySelectorAll(".profile-details");
    var buttonElement = document.querySelector(".res");
    var stufElement = document.querySelector(".stuf");
    if (isDarkMode) {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "black";
        }
        navElement.style.backgroundColor = "white";
        navElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
        imgElement.src = "../assets/img/dark.webp";
        bodyElement.style.backgroundColor = "#f0f8ff";
        aboutElement.style.backgroundColor = "#fbfbfb";
        aboutElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.6)";
        for( var i= 0; i < abouttextElement.length; i++){
            abouttextElement[i].style.color="black";
        }
        buttonElement.style.backgroundColor="rgb(11, 18, 21)";
        buttonElement.style.color="white";
        stufElement.style.color= "rgb(11, 18, 21)";
    } else {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "white";
        }
        navElement.style.backgroundColor = "#101720";
        navElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        imgElement.src = "../assets/img/light3.png";
        bodyElement.style.backgroundColor = "#0b1215"
        aboutElement.style.backgroundColor = "#101720"; 
        aboutElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        for( var i= 0; i < abouttextElement.length; i++){
            abouttextElement[i].style.color="white";
        }
        buttonElement.style.backgroundColor="white";
        buttonElement.style.color="rgb(11, 18, 21)";
        stufElement.style.color= "white";
    }
    isDarkMode = !isDarkMode;
}
