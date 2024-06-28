var isDarkMode = false;

function myfunction() {
    var navtextElements = document.querySelectorAll(".active");
    var navElement = document.getElementById("theememem");
    var imgElement = document.getElementById("themeh");
    var bodyElement = document.body;
    var introtext1Element = document.querySelector(".introtext .h1");
    var introtext2Element = document.querySelector(".introtext .h2");
    var htmlElements = document.getElementsByClassName("htt");
    var cssElements = document.getElementsByClassName("cscscs");
    var figElements = document.getElementsByClassName("figg");
    var intElement = document.querySelector(".intext");
    var viewMyWorkButton = document.querySelector(".buttons .btn");
    var contactMeButton = document.querySelector(".buttons .btnn");
    var iconElements = document.querySelectorAll(".iconlist i");
    var blendElements = document.getElementsByClassName("blend");
    if (isDarkMode) {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "black";
        }
        navElement.style.backgroundColor = "white";
        navElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
        imgElement.src = "../assets/img/dark.webp";
        bodyElement.style.backgroundColor = "#f0f8ff";
        introtext1Element.style.color = "#0b1215";
        introtext2Element.style.color = "#0b1215";
        intElement.style.color = "#0b1215";
        for (var i = 0; i < htmlElements.length; i++) {
            htmlElements[i].style.backgroundColor = "#f0f8ff";
        }
        for (var i = 0; i < cssElements.length; i++) {
            cssElements[i].style.backgroundColor = "#d8edff94";
        }
        for (var i = 0; i < figElements.length; i++) {
            figElements[i].style.backgroundColor = "#d8edff94";
        }
        viewMyWorkButton.style.backgroundColor = "#0b1215";
        viewMyWorkButton.style.color = "#f0f8ff";
        contactMeButton.style.backgroundColor = "#f0f8ff";
        contactMeButton.style.color = "#0b1215";
        for (var i = 0; i < iconElements.length; i++) {
            iconElements[i].style.color = "#0f1721";
        }
        for (var i = 0; i < blendElements.length; i++) {
            blendElements[i].style.backgroundColor = "#d8edff94";
        }
    } else {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "white";
        }
        navElement.style.backgroundColor = "#101720";
        navElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        imgElement.src = "../assets/img/light3.png";
        bodyElement.style.backgroundColor = "#0b1215";
        introtext1Element.style.color = "#fbfbfb";
        introtext2Element.style.color = "#fbfbfb";
        intElement.style.color = "#fbfbfb";
        for (var i = 0; i < htmlElements.length; i++) {
            htmlElements[i].style.backgroundColor = "#0b1215";
        }
        for (var i = 0; i < cssElements.length; i++) {
            cssElements[i].style.backgroundColor = "#0b1215";
        }
        for (var i = 0; i < figElements.length; i++) {
            figElements[i].style.backgroundColor = "#0b1215";
        }
        viewMyWorkButton.style.backgroundColor = "#f0f8ff";
        viewMyWorkButton.style.color = "#0b1215";
        contactMeButton.style.backgroundColor = "#0b1218";
        contactMeButton.style.color = "#f0f8ff";
        for (var i = 0; i < iconElements.length; i++) {
            iconElements[i].style.color = "#f0f8ff";
        }
        for (var i = 0; i < blendElements.length; i++) {
            blendElements[i].style.backgroundColor = "#0b1215";
        }
    }

    isDarkMode = !isDarkMode;
}
