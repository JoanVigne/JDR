
// UN LOUP
let loupContainer = document.getElementById("loupContainer");
let retrievedLoups = localStorage.getItem("loups");
let loups = JSON.parse(retrievedLoups);

let pvLoup = loups[0]["PV"];
let degatsLoup = loups[0]["degats"];
function disparaitreFleche() {
    nord.classList.remove("hidden");
    sud.classList.remove("hidden");
    est.classList.remove("hidden");
    ouest.classList.remove("hidden");
    loupContainer.style.display = "none";  
};
function alertLoup() {
    if (pvLoup <= 0) {
        playerInfo.insertAdjacentHTML('beforeend', '<h4>La dépouille<br> du loup<br> commence deja<br> a geler</h4>');
        disparaitreFleche()
    }
    if (pvLoup >= 1) {
        alert("Un loup surgit devant vous !!");
        loupContainer.innerHTML = "<img src='../images/perso/loup.png' alt=''> <br><h4> PV = " + pvLoup + "<br> Dégats  =" + degatsLoup + "</h4>" ;
        // LE DE
        let dice = document.getElementById("dice");
        dice.innerHTML = "<img src='../images/dé-96.png'>";
    }
}
alertLoup()

// let dice = document.getElementById("dice");
// dice.innerHTML = "<img src='../images/dé-96.png'>";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
dice.addEventListener("click", rollTheDice);
function rollTheDice() {
    let dammagePlayer = getRandomInt(DEGATSPLAYER) + 1;
    let dammageLoup = getRandomInt(degatsLoup) + 1;
    alert("Vous infligez " + dammagePlayer + " de dommage à la bête."+"\n"+" le loup riposte et vous renvoie " + dammageLoup + "  de dammage");
    PVPLAYER = PVPLAYER - dammageLoup;
    pvLoup = pvLoup - dammagePlayer;
    if(pvLoup <= 0) {
        localStorage.setItem("PVPLAYER", PVPLAYER);
        let loups = [{
            "nom": "NNNN",
            "PV": 0,
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
        window.location.reload();
    }

}

// LES DEGATS
// let degatsPlayer = localStorage.getItem("DEGATSPLAYER")
// let dice = document.getElementById("dice");
// function rollTheDice() {
//         let dammagePlayer = getRandomInt(degats) + 1;
//         alert('Vous infligez ' + dammagePlayer + ' de dommage à la bête.'+'\n'+' le loup riposte et vous renvoie 2 de dammage');
//         localStorage.setItem("PV", PV - 2);
//         localStorage.setItem("pvLoup", pvLoup - dammagePlayer);
//         window.location.reload();

//     }
//     if (race === "humain"){
//         console.log(getRandomInt(5));
//     }

// FIN DE VIE LOUP
// if (pvLoup <= 0) {
//     alert("Bravo, vous avez vaincu cette bête sauvage !"+"\n"+" Il n'y a rien à explorer dans les environs, vous revenez donc sur vos pas...");
//     window.location.href = "nordNord.html"; 
// }
// dice.addEventListener('click', rollTheDice);