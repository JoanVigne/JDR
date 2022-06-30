
// DIRECTIONS 
let nord = document.getElementById("nord");
let est = document.getElementById("est");
let sud = document.getElementById("sud");
let ouest = document.getElementById("ouest");
// LES FLECHES DIRECTIONS
function apparaitreFleche() {
    nord.classList.remove("hidden");
    sud.classList.remove("hidden");
    est.classList.remove("hidden");
    ouest.classList.remove("hidden");
};

// AFFICHAGE MINIATURE PV ET NOM DU JOUEUR
let retrievedPlayer = localStorage.getItem("player");
let player = JSON.parse(retrievedPlayer);
let nom = player[0]["nom"];
let race = player[0]["race"];
let img = player[0]["image"];
// STATS DU JOUEUR
let retrievedStats = localStorage.getItem("stats");
let stats = JSON.parse(retrievedStats);
let pv = stats[0]["pv"];
let degats = stats[0]["force"];
let desarme = localStorage.getItem("désarmé");
let armeeOrc = localStorage.getItem("soldatsOrcWithMe");
if (desarme === "oui") {
    degats = degats / 2;
}
let endurance = stats[0]["endurance"];
let speed = stats[0]["speed"];
let intelligence = stats[0]["intelligence"];
let social = stats[0]["social"];
let PVACTUEL = localStorage.getItem("PVACTUEL");
let playerContainer = document.getElementById("player");
let fourrure = localStorage.getItem("Fourrure");

let xpActuel = localStorage.getItem("xpActuel");
// L'armee orc
let retrievedOrcs = localStorage.getItem("orcs");
let orcs = JSON.parse(retrievedOrcs);
// STATS DES LOUPS 
// LES STATS DES LOUPS
let loupContainer = document.getElementById("loupContainer");
let retrievedLoups = localStorage.getItem("loups");
let loups = JSON.parse(retrievedLoups);
// // // //
function affichagePerso() {
    if (fourrure === "oui") {
        playerContainer.innerHTML = "<div id='playerInfos'> <img id='imgPerso' src='../images/perso/" + race + "Loup.png' title='Voir plus de stats'><br><h4 id='statsIn' > PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4><input type='button' value='Fourrure off' id='fourrureNon'></div>";
        let fourrureNon = document.getElementById("fourrureNon");
        fourrureNon.addEventListener('click', fourrureOff);
    }
    if (fourrure === "non") {
        playerContainer.innerHTML = "<div id='playerInfos'>" + img + "<br><h4 id='statsIn'> PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4> </div>";
    }
    if (armeeOrc === "oui") {
        let chefAlive = localStorage.getItem("PVACTUELCHEF");
        playerContainer.innerHTML = `${img}${orcs[7].image}${orcs[6].image}${orcs[5].image}${orcs[4].image}<br>`;
        if (chefAlive <= 0) {
            playerContainer.innerHTML += `${orcs[3].image}`;
        }
    }
    
}
affichagePerso();
// FOURRURE
function fourrureOff() {
    localStorage.setItem("Fourrure", "non");
    window.location.reload();
}


// affichage TOUTES LES STATS
let imgPerso = document.getElementById("imgPerso");
let statsIn = document.getElementById("statsIn");
function addStats() {
    imgPerso.classList.add("displayNone");
    statsIn.innerHTML = "PV: " + PVACTUEL + "/" + pv + "<br> Dégats: " + degats + "<br> Endurance: " + endurance + "<br> Speed: " + speed + "<br>Intel: " + intelligence + "<br> Social: " + social + "<br></h4>";
}
imgPerso.addEventListener("click", addStats);
function hideStats() {
    imgPerso.classList.remove("displayNone");
    statsIn.innerHTML = "PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4>";
}
statsIn.addEventListener("click", hideStats);

//  inserer une barre d'xp
const main = document.querySelector("main");
function createBarreXP(value = 0) {
    const progressBar = document.createElement("progress");
    // let xpActuel = localStorage.getItem("xpActuel");
    progressBar.setAttribute("id", "progressBar");
    progressBar.setAttribute("max", 100);
    progressBar.setAttribute("value", xpActuel);
    main.appendChild(progressBar);
}

createBarreXP(xpActuel);
// if (xpActuel >= 100) {
//     localStorage.setItem("PVACTUEL", pv);
//     alert("Votre experience aux nombreux combats que vous avez menez vous fait récuperer un grand nombre de PV !")
//     localStorage.setItem("xpActuel", 0);
//     window.location.reload();
// }
function levelUp() {
    if (xpActuel.value >= 100) {
        alert("Votre experience aux nombreux combats que vous avez menez vous fait récuperer un grand nombre de PV !");
        localStorage.setItem("PVACTUEL", pv);
        localStorage.setItem("xpActuel", 0);
    }
    else {
        let progressBar = document.getElementById("progressBar");
        progressBar.value = xpActuel;
    }
}



// // LA MORT 

function dead() {
    if (PVACTUEL <= 0) {
        alert('YOU ARE OUT OF LIFE POINT');
        window.location.href = "../accueil.html";
    }
}
dead();


// dice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function apparaitreDé() {
    let dice = document.getElementById("dice");
    dice.innerHTML = "<img src='../images/dé-96.png'>";
}

