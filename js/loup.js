
// fonctions pour combat contre loup, ne pas oublier de mettre de quel loup on parle dans le html

// dice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// fleche direction apres combat
function disparaitreFleche() {
    nord.classList.remove("hidden");
    sud.classList.remove("hidden");
    est.classList.remove("hidden");
    ouest.classList.remove("hidden");
};
// creation loup  ou disparition
function alertLoup() {
    let fourrure = localStorage.getItem("Fourrure");
    if (pvLoup <= 0) {
        loupContainer.innerHTML = '<p>Vous avez vaincu<br>ce canidé sauvage.</p><br>';
        disparaitreFleche();
        if(fourrure === "non"){
            loupContainer.insertAdjacentHTML('beforeend', '<div id="questionNNNN"><input type="button" value="Se vétire de sa fourrure" id="peauDeBete" class="choix"></div>');
            let peauDeBete = document.getElementById("peauDeBete");
            function setPeauDeBete() {
                localStorage.setItem("Fourrure", "oui");
                window.location.reload();
            }
            peauDeBete.addEventListener("click", setPeauDeBete);
        }
    }
    if (pvLoup >= 1) {
        alert("Un loup surgit devant vous !!");
        loupContainer.innerHTML = "<img src='../images/perso/loup.png' alt=''> <br><h4> PV = " + pvLoup + "<br> Dégats  =" + degatsLoup + "</h4>";
        let dice = document.getElementById("dice");
        dice.innerHTML = "<img src='../images/dé-96.png'>";
    }

}
alertLoup()



dice.addEventListener("click", rollTheDice);
function rollTheDice() {
    let dammagePlayer = getRandomInt(DEGATSPLAYER) + 1;
    let dammageLoup = getRandomInt(degatsLoup) + 1;
    alert("Vous infligez " + dammagePlayer + " de dommage à la bête." + "\n" + " le loup riposte et vous renvoie " + dammageLoup + "  de dammage");
    PVPLAYER = PVPLAYER - dammageLoup;
    playerInfo.innerHTML = "<img src='../images/perso/" + race + ".png' alt='personnage " + race + "'><br><h4> PV = " + PVPLAYER + "<br> Dégats = " + DEGATSPLAYER + "</h4><br>";
    pvLoup = pvLoup - dammagePlayer;
    loupContainer.innerHTML = "<img src='../images/perso/loup.png' alt=''> <br><h4> PV = " + pvLoup + "<br> Dégats  =" + degatsLoup + "</h4>";
    if (pvLoup <= 0) {
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
};

