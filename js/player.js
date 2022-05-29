// AFFICHAGE MINIATURE PV ET NOM DU JOUEUR
let retrievedPlayer = localStorage.getItem("player");
let player = JSON.parse(retrievedPlayer);
let nom = player[0]["nom"];
let race = player[0]["race"];
let img = player[0]["image"];

let retrievedStats = localStorage.getItem("stats");
let stats = JSON.parse(retrievedStats);
let pv = stats[0]["pv"];
let degats = stats[0]["force"];
let endurance =  stats[0]["endurance"];
let speed =  stats[0]["speed"];
let intelligence =  stats[0]["intelligence"];
let social =  stats[0]["social"];
let PVACTUEL = localStorage.getItem("PVACTUEL");

let playerContainer = document.getElementById("player");
let fourrure = localStorage.getItem("Fourrure");
function affichagePerso() {
    if (fourrure === "oui") {
        playerContainer.innerHTML = "<div id='playerInfos'> <img id='imgPerso' src='../images/perso/" + race + "Loup.png' alt='personnage " + race + "'><br><h4 id='statsIn' > PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4><input type='button' value='Fourrure off' id='fourrureNon'></div>";    
        
    }
    else {
        playerContainer.innerHTML = "<div id='playerInfos'><img id='imgPerso' src='../images/perso/" + race + ".png' alt='personnage " + race + "'><br><h4 id='statsIn'> PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4> </div>";
    }
}
affichagePerso();


// affichage TOUTES LES STATS
let imgPerso = document.getElementById("imgPerso");
let statsIn = document.getElementById("statsIn");
function addStats(){
    imgPerso.classList.add("displayNone");
    statsIn.innerHTML = "PV: " + PVACTUEL +"/"  + pv + "<br> Dégats: " + degats + "<br> Endurance: " + endurance + "<br> Speed: " + speed + "<br>Intel: " + intelligence + "<br> Social: " + social + "<br></h4>";
}
imgPerso.addEventListener("click", addStats);

function hideStats(){
    imgPerso.classList.remove("displayNone");
    statsIn.innerHTML = "PV: " + PVACTUEL + "<br> Dégats: " + degats + "</h4>";
}
statsIn.addEventListener("click", hideStats);

// inserer une barre d'xp
// main = document.querySelector("main");
// function createBarreXP(){
//     barreXP = document.createElement("div");
//     barreXP.innerHTML = '<progress id="file" max="100" value="70"> 70% </progress>';
    
// }
// createBarreXP()



// FOURRURE
if(fourrure === "oui"){
 let fourrureNon = document.getElementById("fourrureNon");
 function fourrureOff(){
     localStorage.setItem("Fourrure", "non");
     console.log("le click fourrureoff fonctionne");
     window.location.reload();
 }
 fourrureNon.addEventListener('onclick', fourrureOff);
}


// // LA MORT 

function dead() {
    if (PVACTUEL <= 0) {
        alert('YOU ARE OUT OF LIFE POINT');
        window.location.href = "accueil.html";
    }
}
dead();

// DIRECTIONS 
let nord = document.getElementById("nord");
let est = document.getElementById("est");
let sud = document.getElementById("sud");
let ouest = document.getElementById("ouest");

