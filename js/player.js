// AFFICHAGE MINIATURE PV ET NOM DU JOUEUR
let retrievedPlayer = localStorage.getItem("player");
let player = JSON.parse(retrievedPlayer);

let nom = player[0]["nom"];
let race = player[0]["race"];
let img = player[0]["image"];
let PVPLAYER = localStorage.getItem("PVPLAYER");
let DEGATSPLAYER = localStorage.getItem("DEGATSPLAYER");
let playerInfo = document.getElementById("player");

function affichagePerso () {
    playerInfo.innerHTML = "<img src='../images/perso/" + race + ".png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4><br>";
}
affichagePerso();


// // LA MORT 
function dead() {
    if (PVPLAYER <= 0) {
        alert('YOU ARE OUT OF LIFE POINT');
        window.location.href = "accueil.html";
    }
}
dead();


