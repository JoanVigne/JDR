
// // BUTTON
const button = document.getElementById('button');


// // Declaration des variables
let choixNom = document.getElementById('nomPlayer');
let choixRace = document.getElementById('racePlayer');


window.onload = function () {
  localStorage.clear();
}


button.addEventListener('click', setPlayer);
function setPlayer() {
    var player = [{
        "nom": choixNom.value,
        "race": choixRace.value,
        "image": choixRace.value
       }];
    localStorage.setItem("player", JSON.stringify(player));
    window.location.href = "html/startJeu.html";
  };
  