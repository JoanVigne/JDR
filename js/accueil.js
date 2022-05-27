
// // BUTTON
const button = document.getElementById('button');


// // Declaration des variables
let choixNom = document.getElementById('nomPlayer');
let choixRace = document.getElementById('racePlayer');


window.onload = function () {
  localStorage.clear();
}


button.addEventListener('click', setPlayer);
button.addEventListener('click', setFourrure);
button.addEventListener('click', setEnemies);
function setPlayer() {
  let player = [{
    "nom": choixNom.value,
    "race": choixRace.value,
    "image": choixRace.value
  }];
  localStorage.setItem("player", JSON.stringify(player));
  window.location.href = "html/startJeu.html";
};

function setFourrure() {
  localStorage.setItem("Fourrure", "non");
}

function setEnemies() {
  let loups = [{
    "nom": "NNNN",
    "PV": 5,
    "degats": 2
  },
  {
    "nom": "NNNNN",
    "PV": 7,
    "degats": 3
  },
  {
    "nom": "NNNO",
    "PV": 4,
    "degats": 3
  },
  {
    "nom": "NNOO",
    "PV": 5,
    "degats": 2
  },
  {
    "nom": "NNNOO",
    "PV": 7,
    "degats": 3
  }
  ]
  localStorage.setItem("loups", JSON.stringify(loups));
}