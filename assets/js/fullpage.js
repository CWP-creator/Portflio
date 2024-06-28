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
    var hahahElements = document.querySelector(".hahah");
    var boxElements = document.getElementById("boxess");
    var boxxElements = document.getElementById("boxes");
    var projElement = document.getElementById("myyy");
    var projboxElements = document.querySelectorAll(".project");
    var contactElements = document.querySelector(".heyu");
    var subtitleElments = document.querySelector(".text");
    var gotElements = document.querySelector(".uarego");
    var vlElements = document.querySelector(".vl");

    if (isDarkMode) {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "black";
        }
        navElement.style.backgroundColor = "white";
        navElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
        imgElement.src = "../assets/img/dark.webp";
        bodyElement.style.backgroundColor = "#f0f8ff";
        aboutElement.style.backgroundColor = "#fbfbfb";
        aboutElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.4)";
        for (var i = 0; i < abouttextElement.length; i++) {
            abouttextElement[i].style.color = "black";
        }
        buttonElement.style.backgroundColor = "rgb(11, 18, 21)";
        buttonElement.style.color = "white";
        stufElement.style.color = "rgb(11, 18, 21)";
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
        hahahElements.style.color="#0b1215";
        boxElements.style.backgroundColor="#f0f8ff";
        boxElements.style.color="#0b1215";
        boxElements.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.4)";
        boxxElements.style.backgroundColor="#f0f8ff";
        boxxElements.style.color="#0b1215";
        boxxElements.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.4)";
        projElement.style.color="#0b1215";
        projboxElements.forEach(function(projbox) {
            projbox.style.backgroundColor = "#f0f8ff";
            projbox.style.color = "#0b1215";
            projbox.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.6)";
        });
        contactElements.style.color="#0b1215";
        subtitleElments.style.color="#0b1215";
        gotElements.style.color="#0b1215";
        vlElements.style.borderLeft = "3px solid black";

    } else {
        for (var i = 0; i < navtextElements.length; i++) {
            navtextElements[i].style.color = "white";
        }
        navElement.style.backgroundColor = "#101720";
        navElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        imgElement.src = "../assets/img/light3.png";
        bodyElement.style.backgroundColor = "#0b1215";
        aboutElement.style.backgroundColor = "#101720";
        aboutElement.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        for (var i = 0; i < abouttextElement.length; i++) {
            abouttextElement[i].style.color = "white";
        }
        buttonElement.style.backgroundColor = "white";
        buttonElement.style.color = "rgb(11, 18, 21)";
        stufElement.style.color = "white";
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
        hahahElements.style.color="#f0f8ff";
        boxElements.style.backgroundColor="#0b1215";
        boxElements.style.color="#f0f8ff";
        boxElements.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        boxxElements.style.backgroundColor="#0b1215";
        boxxElements.style.color="#f0f8ff";
        boxxElements.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        projElement.style.color="#f0f8ff";
        projboxElements.forEach(function(projbox) {
            projbox.style.backgroundColor = "#0b1215";
            projbox.style.color = "#f0f8ff";
            projbox.style.boxShadow = "0 4px 30px rgba(255, 255, 255, 0.15)";
        });
        contactElements.style.color="#f0f8ff";
        subtitleElments.style.color="#f0f8ff";
        gotElements.style.color="#f0f8ff";
        vlElements.style.borderLeft = "3px solid white";

    }

    isDarkMode = !isDarkMode;
}
function dropdown() {
    var dropdownElement = document.getElementById("demo");
    dropdownElement.classList.toggle("show");
}
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}   function goToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    
    event.target.classList.add('active');
}
