// choixnordnord2
let choixnordnord = localStorage.getItem("choixNordNord");
let containerPara = document.getElementById("containerPara");

let nordNordEstChoix = localStorage.getItem("nordNordEst");


depart()
function depart(){
    if(nordNordEstChoix === "paysans morts"){
        containerPara.innerHTML = `<p>Les deux corps gisent sur le sol</p>`
        apparaitreFleche();
    }
    else if(nordNordEstChoix === "paysans fuite"){
        containerPara.innerHTML = `<p>Ils ont fuient vers l'est tout à l'heure...</p>`
        apparaitreFleche();
    }
    else {
        consequencesChoixNordNord();
    }
}
function consequencesChoixNordNord() {
    if (choixnordnord === "Se cacher") {
        containerPara.innerHTML += "";
        apparaitreFleche();
    }
    if (choixnordnord === "Dire bonjour") {
        if (race === "orc") {
            containerPara.innerHTML += "<p>Vous voyez les deux paysans courir. <br>Faites un lancé de dès pour savoir si vous les rattrapez</p>";
            apparaitreDé();
            dice.addEventListener("click", rollTheDiceRattraper);
        }
        else{
            containerPara.innerHTML += "<p>Un beau chemin bien entretenu, comme on les aime.</p>";
            apparaitreFleche();
        }

    }
};

function rollTheDiceRattraper() {
    let result = getRandomInt(21);
    if (result <= speed) {
        containerPara.innerHTML = `<p>Vous rattrapez ces deux humains</p>
                                        <input id="attaquer" type="button" value="Les attaquer"><br>
                                        <input id="raisonner" type="button" value="Tenter de les raisonner">`;
        let attaquer = document.getElementById("attaquer");
        attaquer.addEventListener("click", attaquerFunction);
        let raisonner = document.getElementById("raisonner");
        raisonner.addEventListener("click", raisonnerFunction);
    }
    else {
        containerPara.innerHTML = `<p>Vous les voyez partir encore plus vers l'est, ils sont trop rapides pour vous...</p>`
        localStorage.setItem("nordNordEst", "paysans fuite");
        dice.innerHTML = "";
        apparaitreFleche();
    }
};

function attaquerFunction(){
    apparaitreDé();
    containerPara.innerHTML = `<p>Les deux paysans sont tétanisés de peur</p>`; 
    dice.addEventListener("click", rollTheDiceVSPaysants);
    function rollTheDiceVSPaysants(){
        let degatPerso = getRandomInt(degats + 1);
        if(degatPerso <= 1){
            containerPara.innerHTML = `<p>Vous manquez votre coup et tribuchez, ils en profitent pour essayer de s'enfuir a nouveau</p>`;
            containerPara.innerHTML += "<p>Faites un lancé de dès pour savoir si vous les rattrapez</p>";
            apparaitreDé();
            dice.addEventListener("click", rollTheDiceRattraper);
        }
        else if(degatPerso >1 && degatPerso <=4){
            containerPara.innerHTML = `<p>Vous les manquez de peu, et ils sont paralisés de peur.</p>`;
        }
        else {
            containerPara.innerHTML = `<p>D'une puissance orculéenne, vous décapitez les deux paysans d'un seul coup</p>`;
            localStorage.setItem("nordNordEst", "paysans morts");
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 10);
            apparaitreFleche();
        }
    }

};
function raisonnerFunction(){
    containerPara.innerHTML = `<p>Vous vous approchez d'eux calmement pour essayer de leur parler...<br>
    Mais ils paniquent á la vue de votre laideur et repartent en courant!!<br>
    </p>`; 
    consequencesChoixNordNord();
};