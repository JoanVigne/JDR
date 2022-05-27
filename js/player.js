// AFFICHAGE MINIATURE PV ET NOM DU JOUEUR
let retrievedPlayer = localStorage.getItem("player");
let player = JSON.parse(retrievedPlayer);

let nom = player[0]["nom"];
let race = player[0]["race"];
let img = player[0]["image"];
let PVPLAYER = localStorage.getItem("PVPLAYER");
let DEGATSPLAYER = localStorage.getItem("DEGATSPLAYER");
let playerInfo = document.getElementById("player");
let fourrure = localStorage.getItem("Fourrure");
function affichagePerso() {
    if (fourrure === "oui") {
        playerInfo.innerHTML = "<img src='../images/perso/" + race + "Loup.png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4><input type='button' value='Fourrure off' id='fourrureNon'>";    
        
    }
    else {
        playerInfo.innerHTML = "<img src='../images/perso/" + race + ".png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4> ";
    }
}
affichagePerso();

if(fourrure === "oui"){
    console.log("Ficicii");
 let fourrureNon = document.getElementById("fourrureNon");
 console.log(fourrureNon);
console.log(fourrureOff);
 function fourrureOff(){
     localStorage.setItem("Fourrure", "non");
     console.log("le click fourrureoff fonctionne");
     window.location.reload();
 }
 fourrureNon.addEventListener('onclick', fourrureOff);
}


// // LA MORT 
function dead() {
    if (PVPLAYER <= 0) {
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