
// CHOIX NORD NORD
// sans les fleches 
function disparaitreFleche() {
    nord.classList.remove("hidden");
    sud.classList.remove("hidden");
    est.classList.remove("hidden");
    ouest.classList.remove("hidden");
    choixNordNord.style.marginTop = "20px";
};
let nordNordDone = localStorage.getItem("choixNordNord")
let choixNordNord = document.getElementById("choixNordNord");
let choixNordNord1 = document.getElementById("choixNordNord1");
let choixNordNord2 = document.getElementById("choixNordNord2");
let paraChoix = document.getElementById("paraChoix");
// verifie si le choix a deja été fait
window.onload = function done() {
    if (nordNordDone === "choixNordNord1") {
        paraChoix.innerHTML = "C'est juste deux paysans. Ils se dirigent vers le sud, sans vous voir."
        localStorage.setItem("choixNordNord", "choixNordNord1");
        choixNordNord1.remove();
        choixNordNord2.remove();
        disparaitreFleche();
    }
    if (nordNordDone === "choixNordNord2") {
        if (race === "orc") {
            paraChoix.innerHTML = "En vous rapprochant pour les saluer, vous vous rendez compte que ce sont <strong>des humains.</strong><br> Quand ils se rendent compte que vous êtes <strong>un orc</strong>,<br> ils prennent leurs jambes à leurs cous <strong>vers l'est</strong>  !";
        }
        if (race === "humain") {
            paraChoix.innerHTML = "Vous les saluez,ils sont ravis de vous voir et vous retourne votre bonjour.";
        }
        if (race === "savana") {
            alert("They re gringos, you scare them so they run away");
        }
        localStorage.setItem("choixNordNord", "choixNordNord2");
        choixNordNord1.remove();
        choixNordNord2.remove();
        disparaitreFleche();
    }
}


// stock le choix
choixNordNord1.addEventListener("click", setChoixNordNord1);
choixNordNord2.addEventListener("click", setChoixNordNord2);
function setChoixNordNord1() {
    localStorage.setItem("choixNordNord", "choixNordNord1");
    window.location.href = "nordNord.html";
}
function setChoixNordNord2() {
    localStorage.setItem("choixNordNord", "choixNordNord2");
    window.location.href = "nordNord.html";
}

