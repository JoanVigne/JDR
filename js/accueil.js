
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
    "image": `<img src='../images/perso/` + choixRace.value + `.png' alt'' id='imgPerso' title='Voir plus de stats'>`
  }];
  localStorage.setItem("player", JSON.stringify(player));
  window.location.href = "html/startJeu.html";
};

function setFourrure() {
  localStorage.setItem("Fourrure", "non");
}

function setEnemies() {
  let soldats = [{
    "nom": "Mathieu",
    "PV": 7,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>",
    id: 0
  },
  {
    "nom": "Charlie",
    "PV": 5,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>",
    id: 1
  },
  {
    "nom": "Jess",
    "PV": 7,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>",
    id: 2
  },
  {
    "nom": "Bastien",
    "PV": 17,
    "degats": 6,
    "image": "<img src='../images/perso/chefOrc.png' alt'' id='chefOrc'>",
    id: 3
  },
  {
    "nom": "Nicolas",
    "PV": 5,
    "degats": 2,
    "image": "<img src='../images/perso/chevalierCute.png' alt'' class='soldatOrc'>",
    id: 4
  },
  {
    "nom": "Sebastien",
    "PV": 4,
    "degats": 2,
    "image": "<img src='../images/perso/chevalierCute.png' alt'' class='soldatOrc'>",
    id: 5
  },
  {
    "nom": "Daniel",
    "PV": 10,
    "degats": 5,
    "image": "<img src='../images/perso/cavalier.png' alt'' class='soldatOrc'>",
    id: 6
  },
  {
    "nom": "Claude",
    "PV": 8,
    "degats": 4,
    "image": "<img src='../images/perso/cavalier.png' alt'' class='soldatOrc'> ",
    id: 7
  },
  {
    "nom": "Venceslas",
    "PV": 12,
    "degats": 7,
    "image": "<img src='../images/perso/cavalier.png' alt'' class='soldatOrc'> ",
    id: 8
  }
]
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
  let orcs = [{
    "nom": "Argul",
    "PV": 7,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>"
  },
  {
    "nom": "Mordiz",
    "PV": 5,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>"
  },
  {
    "nom": "Ruzmid",
    "PV": 7,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp.png' alt''>"
  },
  {
    "nom": "Chef Morodor",
    "PV": 17,
    "degats": 6,
    "image": "<img src='../images/perso/chefOrc.png' alt'' id='chefOrc'>"
  },
  {
    "nom": "ZO",
    "PV": 5,
    "degats": 2,
    "image": "<img src='../images/perso/orcCamp2.png' alt'' class='soldatOrc'>"
  },
  {
    "nom": "Retu",
    "PV": 4,
    "degats": 4,
    "image": "<img src='../images/perso/orcCamp3.png' alt'' class='soldatOrc'>"
  },
  {
    "nom": "Fouz",
    "PV": 6,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp4.png' alt'' class='soldatOrc'>"
  },
  {
    "nom": "Waî",
    "PV": 7,
    "degats": 3,
    "image": "<img src='../images/perso/orcCamp5.png' alt'' class='soldatOrc'> "
  }
]
localStorage.setItem("soldats", JSON.stringify(soldats));
  localStorage.setItem("orcs", JSON.stringify(orcs)); 
  localStorage.setItem("loups", JSON.stringify(loups));
 
}
