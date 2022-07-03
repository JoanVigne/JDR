
// CHOIX NORD NORD
// sans les fleches 
let fleches = document.getElementsByClassName("tooltip");
function apparaitreFleche() {
    for (let f = 0; f < fleches.length; f++)
        fleches[f].classList.remove("hidden");
    choixNordNord.style.marginTop = "20px";
};

let nordNordDone = localStorage.getItem("choixNordNord")
let choixNordNord = document.getElementById("choixNordNord");
let choixNordNord1 = document.getElementById("choixNordNord1");
let choixNordNord2 = document.getElementById("choixNordNord2");
let paraChoix = document.getElementById("paraChoix");
// verifie si le choix a deja été fait
done()
function done() {
    if (nordNordDone === "Se cacher") {
        paraChoix.innerHTML = "Ils s'etaient dirigés vers le sud.."

    }
    if (nordNordDone === "Dire bonjour") {
        if (race === "orc") {
            paraChoix.innerHTML = "Ils avaient fui vers l'est";
        }
        if (race === "humain") {
            paraChoix.innerHTML = "Ils s'etaient dirigés vers le sud";
        }
        if (race === "savana") {
            alert("They re gringos, you scare them so they run away");
        }
        choixNordNord1.remove();
        choixNordNord2.remove();
        apparaitreFleche();
    }
}


// stock le choix
choixNordNord1.addEventListener("click", setChoixNordNord1);
choixNordNord2.addEventListener("click", setChoixNordNord2);
function setChoixNordNord1() {
    localStorage.setItem("choixNordNord", "Se cacher");
    paraChoix.innerHTML = "C'est juste deux paysans. Ils se dirigent vers le sud, sans vous voir.";
    choixNordNord1.remove();
    choixNordNord2.remove();
    apparaitreFleche();
}
function setChoixNordNord2() {
    localStorage.setItem("choixNordNord", "Dire bonjour");
    if (race === "orc") {
        paraChoix.innerHTML = `En vous rapprochant pour les saluer, vous vous rendez compte que ce sont 
        <strong>des humains.</strong><br> Quand ils se rendent compte que vous êtes <strong>un orc</strong>,
        <br> ils prennent leurs jambes à leurs cous <strong>vers l'est</strong>  !`;
    }
    if (race === "humain") {
        paraChoix.innerHTML = "Vous les saluez,ils sont ravis de vous voir et vous retourne votre bonjour.";
    }
    if (race === "savana") {
        alert("They re gringos, you scare them so they run away");
    }
    choixNordNord1.remove();
    choixNordNord2.remove();
    apparaitreFleche();
}

