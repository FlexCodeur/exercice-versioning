const lien1 = document.getElementById("Lien1");
const lien2 = document.getElementById("Lien2");
const lien3 = document.getElementById("Lien3");
const lien4 = document.getElementById("Lien4");
const sousMenu1 = document.getElementById("sousMenu1");
const sousMenu2 = document.getElementById("sousMenu2");
const sousMenu3 = document.getElementById("sousMenu3");

lien1.addEventListener("mouseover", () => {
    
    sousMenu1.classList.toggle("displayNone");

});


lien2.addEventListener("mouseover", () => {
    
    sousMenu2.classList.toggle("displayNone");

});

lien4.addEventListener("mouseover", () => {
    
    sousMenu3.classList.toggle("displayNone");

});