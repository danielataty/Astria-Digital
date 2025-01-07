var navbar = document.getElementById("navbar");
var scrol = window.scrollY;

window.addEventListener("scroll", function () {
    scrol = window.scrollY;
    if (scrol > 500) {
        navbar.style.background = "#011329"
        navbar.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.48)"
        
    }else{
        navbar.style.background = "transparent"
        navbar.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.19)"
    }
});


var icone = document.getElementById("icone")
var card = document.getElementById("card")

/*Quando o mause passar por dentro do card a imagem troca e vice versa 1ª */
// Primeiro card
var card1 = document.getElementById("card1");
var icone1 = document.getElementById("icone1");

card1.addEventListener("mouseenter", function () {
    icone1.src = "img/Icones/websites1.png";
});
card1.addEventListener("mouseleave", function () {
    icone1.src = "img/Icones/websites3.png";
});

// Segundo card
var card2 = document.getElementById("card2");
var icone2 = document.getElementById("icone2");

card2.addEventListener("mouseenter", function () {
    icone2.src = "img/Icones/design1.png";
});
card2.addEventListener("mouseleave", function () {
    icone2.src = "img/Icones/design3.png";
});

// Terceiro card
var card3 = document.getElementById("card3");
var icone3 = document.getElementById("icone3");

card3.addEventListener("mouseenter", function () {
    icone3.src = "img/Icones/redes1.png";
});
card3.addEventListener("mouseleave", function () {
    icone3.src = "img/Icones/redes3.png";
});

// Quarto card
var card4 = document.getElementById("card4");
var icone4 = document.getElementById("icone4");

card4.addEventListener("mouseenter", function () {
    icone4.src = "img/Icones/mark1.png";
});
card4.addEventListener("mouseleave", function () {
    icone4.src = "img/Icones/mark3.png";
});

