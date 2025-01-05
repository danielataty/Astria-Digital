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

/*Elemento que se move */

var star = document.getElementById("star")

window.addEventListener("mousemove", (e) =>{
    const x = e.clientX; // Pega a posição X do mouse
    const y = e.clientY;

    star.style.transform = `translate(${x}px, ${y}px)`;
})
