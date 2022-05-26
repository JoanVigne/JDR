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
        playerInfo.innerHTML = "<img src='../images/perso/" + race + "Loup.png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4><h5>Fourrure:<input type='button' value='off' id='fourrureNon'></h5>";
        let fourrureNon = document.getElementById("fourrureNon");
        fourrureNon.onclick = localStorage.setItem("Fourrure", "non");
        window.location.reload();
    }
    else {
        playerInfo.innerHTML = "<img src='../images/perso/" + race + ".png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4> ";
    }
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


