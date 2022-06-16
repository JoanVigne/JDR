

let containerPara = document.getElementById("containerPara");
containerPara.innerHTML = `${orcs[3].image}<h4>${orcs[3].nom}</h4>`;


let desarmed = localStorage.getItem("désarmé");

// RECUP DES CHOIX
let choixOrc1Second = localStorage.getItem("choixOrc1Second");
let firstContactChefStorage = localStorage.getItem("firstContactChef");
let premierChoixStorage = localStorage.getItem("premierChoix");
let dernierChoixStorage = localStorage.getItem("dernierchoix");
// let apresSecondChoixStorage = localStorage.getItem("premierChoix");

const premierChoix = {
    "Charismatique": [
        "Mettre un genou a terre en guise de respect",
        "Ne rien faire",
        "Donner un ordre au chef"
    ],
    "fight": [
        "Mettre un genou a terre en guise de respect",
        "Ne rien faire",
        "Se plaindre des gardes agressifs"
    ],
    "chef armé": [
        "Mettre un genou a terre en guise de respect",
        "Ne rien faire",
        "Provoquer un duel à mort"
    ]
};
const deuxiemeChoix = {
    "RespectHumain": [
        "Se relever et se préparer au combat",
        "Proposer un duel à mort",
        "Demander asile"
    ],
    "RespectOrc": [
        "Proposer un duel pour prendre sa place",
        "Demander de l'aide pour votre quête",
        "Demander asile"
    ],
    "Ne rien faire": [
        "Je me suis perdu",
        "Je cherchais refuge quelque-part",
        "Je veux prendre le controle de ce camp"
    ],
    "Se plaindre des gardes agressifs": [
        "Oui, je suis blessé par leurs fautes, je souhaite me reposer ici",
        "Non, aucun soucis",
        "Oui, ordres stupides par un chef stupide"
    ],
    "Donner un ordre au chef": [
        "J'aime me battre",
        "Demander pardon",
    ],
    "Provoquer un duel à mort": [
        "À mains nues",
        "Avec des armes",
        "Je plaisante !"
    ]
};

// LES FUNCTIONS
function arriverO1() {
    // puis mettre result en condition
    if (dernierChoixStorage != null) {
        consequences();
    }
    else if (premierChoixStorage != null) {
        apresSecondChoix();
    }
    else if (firstContactChefStorage != null) {
        apresPremierChoix();
    }
    // si on vient d'arriver sur la page 
    else {
        firstContactChef();
        let PVACTUELCHEF = localStorage.setItem("PVACTUELCHEF", orcs[3].PV);
    }
}
arriverO1();

function firstContactChef() {
    if (desarmed === "non") {
        containerPara.innerHTML += `<p>"Je vois que vous n'êtes pas du genre à qu'on vous enlève votre arme."</p>`
    }
    if (race === "orc") {
        containerPara.innerHTML += `<p>"Bienvenue frère orc"</p>`
    }
    if (race === "humain") {
        containerPara.innerHTML += `<p>"Que voulez vous, pitoyable humain?"</p>`
    }
    // CONSEQUENCE CHOIX O1
    if (choixOrc1Second === "Charismatique") {
        containerPara.innerHTML += `<p></p>`
        setInputFirstContactChef(premierChoix, "Charismatique");
    }
    if (choixOrc1Second === "fight") {
        containerPara.innerHTML += `<p></p>  `
        setInputFirstContactChef(premierChoix, "fight");
    }
    if (choixOrc1Second === "chef armé") {
        containerPara.innerHTML += `<p></p>  `
        setInputFirstContactChef(premierChoix, "nePasRepondre");
    }
}
// DEUXIEME CHOIX
function apresPremierChoix() {
    console.log("apresPremierChoix");
    if (firstContactChefStorage === "Mettre un genou a terre en guise de respect") {
        if (race === "humain") {
            containerPara.innerHTML += `<p>Je n'ai que faire de votre respect.</p>`
            setInputApresPremierChoix(deuxiemeChoix, "RespectHumain");
        }
        else {
            containerPara.innerHTML += `<p>J'apprecie ce geste, frère orc.</p>`
            setInputApresPremierChoix(deuxiemeChoix, "RespectOrc");
        }
    }
    if (firstContactChefStorage === "Ne rien faire") {
        containerPara.innerHTML += `<p>Que faites vous à roder prêt de mon campement?</p>`
        setInputApresPremierChoix(deuxiemeChoix, "Ne rien faire");
    }
    if (firstContactChefStorage === "Se plaindre des gardes agressifs") {
        containerPara.innerHTML += `<p>Les ordres viennent de moi, probleme?</p>`
        setInputApresPremierChoix(deuxiemeChoix, "Se plaindre des gardes agressifs");
    }
    if (firstContactChefStorage === "Donner un ordre au chef") {
        containerPara.innerHTML += `<p>Pardon?<br>[il sort son arme]</p>`
        setInputApresPremierChoix(deuxiemeChoix, "Donner un ordre au chef");
    }
}
// REPONSE DERNIER CHOIX
function apresSecondChoix() {
    console.log("apressecondchoix");
    if (premierChoixStorage === "Demander asile" || premierChoixStorage === "Je cherchais refuge quelque-part") {
        if (race === "humain") {
            apparaitreDé()
            containerPara.innerHTML += `<p>Lancé le dé de 20 pour savoir si votre éloquence sera convaincre.</p>`
            dice.addEventListener("click", rollTheDiceHere);
            function rollTheDiceHere() {
                let result = getRandomInt(21);
                alert("Vous avez lancé votre dé et fait un " + result)

                if (result <= 5) {
                    localStorage.setItem("dernierchoix", "Reposez-vous");
                }
                if (result > 5 && result < 11) {
                    alert("Deuxieme chance...");
                    window.location.reload();
                }
                if (result >= 11) {
                    localStorage.setItem("dernierchoix", "fight");
                }
            }
        }
        else {
            localStorage.setItem("dernierchoix", "Reposez-vous");
        }

    }
    if (premierChoixStorage === "Se relever et se préparer au combat" || premierChoixStorage === "J'aime me battre" || premierChoixStorage === "Oui, ordres stupides par un chef stupide") {
        localStorage.setItem("dernierchoix", "fight");
    }
    if (premierChoixStorage === "Proposer un duel à mort" || premierChoixStorage === "Proposer un duel pour prendre sa place" || premierChoixStorage === "Je veux prendre le controle de ce camp" || premierChoixStorage === "Avec des armes") {
        localStorage.setItem("dernierchoix", "fightPourLead");
        localStorage.setItem("désarmé", "non");
        window.location.reload();
    }
    if (premierChoixStorage === "À mains nues") {
        localStorage.setItem("dernierchoix", "fightPourLead");
        localStorage.setItem("désarmé", "oui");
        window.location.reload();
    }
    if (premierChoixStorage === "Je plaisante !" || premierChoixStorage === "Demander pardon") {
        apparaitreDé()
        containerPara.innerHTML += `<p>Lancé le dé de 20 pour savoir si votre éloquence sera convaincre.</p>`
        dice.addEventListener("click", rollTheDice);
        function rollTheDice() {
            let result = getRandomInt(21);
            alert("Vous avez lancé votre dé et fait un " + result)

            if (result <= 5) {
                localStorage.setItem("dernierchoix", "Reposez-vous");
            }
            if (result > 5 && result < 11) {
                alert("Deuxieme chance...");
                window.location.reload();
            }
            if (result >= 11) {
                localStorage.setItem("dernierchoix", "fight");
            }
        }
    }
    if (premierChoixStorage === "Oui, je suis blessé par leurs fautes, je souhaite me reposer ici") {
        if (race === "humain") {
            apparaitreDé()
            containerPara.innerHTML += `<p>Lancé le dé de 20 pour savoir si votre éloquence sera convaincre.</p>`
            dice.addEventListener("click", rollTheDiceHereAgain);
            function rollTheDiceHereAgain() {
                let result = getRandomInt(21);
                alert("Vous avez lancé votre dé et fait un " + result)

                if (result <= 5) {
                    localStorage.setItem("dernierchoix", "Reposez-vous");
                }
                if (result > 5 && result < 11) {
                    alert("Deuxieme chance...");
                    window.location.reload();
                }
                if (result >= 11) {
                    localStorage.setItem("dernierchoix", "fight");
                }
            }
        }
        else {
            localStorage.setItem("dernierchoix", "Reposez-vous");
        }
    }
    if (premierChoixStorage === "Non, aucun soucis") {
        localStorage.setItem("dernierchoix", "Reposez-vous");
    }
    if (premierChoixStorage === "Je me suis perdu") {
        if (race === "humain") {
            localStorage.setItem("dernierchoix", "fight");
        }
        else {
            localStorage.setItem("dernierchoix", "Reposez-vous");
        }
    }
    if (premierChoixStorage === "Demander de l'aide pour votre quête") {
        if (race === "humain") {
            localStorage.setItem("dernierchoix", "fight");
        }
        else {
            apparaitreDé()
            containerPara.innerHTML += `<p>Lancé le dé de 20 pour savoir si votre éloquence sera convaincre.</p>`
            dice.addEventListener("click", rollTheDice);
            function rollTheDice() {
                let result = getRandomInt(21);
                alert("Vous avez lancé votre dé et fait un " + result)

                if (result <= 5) {
                    localStorage.setItem("dernierchoix", "alliance");
                }
                if (result > 5 && result < 11) {
                    alert("Deuxieme chance...");
                }
                if (result >= 11) {
                    localStorage.setItem("dernierchoix", "Reposez-vous");

                }
                window.location.reload();
            }
        }
    }

}

// CONSEQUENCES DERNIER CHOIX

function consequences() {

    PVACTUELCHEF = localStorage.getItem("PVACTUELCHEF");
    console.log("CONSEQUENCE");
    if (dernierChoixStorage === "Reposez-vous") {
        containerPara.innerHTML += `<p>Reposez vous, mangez à votre faim et dormez ici quelques jours, le temps de vous remettre d'aplomb</p>`
        containerPara.addEventListener("click", reposAndRelocation);
        function reposAndRelocation() {
            localStorage.setItem("PVACTUEL", stats[0]["pv"])
            alert("Certains gardes vous escortent loin du camp, pour éviter des attaquent éventuelles de loups, ils s'éloigne ensuite et vous saluent respectueusement");
            window.location.href = "NordNord.html";
        }
    }
    if (dernierChoixStorage === "fight") {
        if (PVACTUELCHEF >= 0) {
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 70);
            affichagePerso();
            containerPara.innerHTML = `Vous avez vaincu le chef ! Les soldats du camp se dirige vers vous...`;
            // buttons      
            containerPara.innerHTML += `<input id="combattre" type="button" class="choix" value="Provoquer tout le monde et combattre">`;
            let combattreEvent = document.getElementById("combattre");
            combattreEvent.addEventListener("click", combattreEventFunction)
            function combattreEventFunction() {
                localStorage.setItem("dernierchoix", "fightWithAll");
                window.location.reload();
            }
            containerPara.innerHTML += `<input id="solo" type="button" class="choix" value="Repartir seul sans rien dire">`;
            let soloEvent = document.getElementById("soldats");
            soloEvent.addEventListener("click", soloEventRace);

            containerPara.innerHTML += `<input id="soldats" type="button" class="choix" value="Demandez aux soldats de vous suivre">`;
            let soldatsEvent = document.getElementById("soldats");
            soldatsEvent.addEventListener("click", soldatWithMe);
            function soldatWithMe() {
                alert("Les soldats orcs vous aclament, et vous retournez au depart de l'aventure en leur compagnie, et continuer votre quête")
                localStorage.setItem("soldatsOrcWithMe", "oui");
                window.location.href = "spawn.html"; //  AU SPAWN AVEC L ARMEE ORC
            };
        }
        else {
            apparaitreDé()
            dice.addEventListener("click", rollTheDiceVSCHEF);
            containerPara.innerHTML = `${orcs[3].image}<h4>PV: ${PVACTUELCHEF}<br>Degats: ${orcs[3].degats}</h4>`;
        }
    }
    if (dernierChoixStorage === "fightPourLead") {
        if (PVACTUELCHEF <= 0) {
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 70);
            affichagePerso();
            containerPara.innerHTML = `<h4>Vous avez vaincu le chef</h4><br><p>Les orcs du camp sont autour de vous sans bouger</p>
            <input id="soldatsAvecMoi" type="button" class="choix" value="Demandez aux soldats de vous suivre"><br>
            <input id="combattre" type="button" class="choix" value="Provoquer tout le monde et combattre"><br>
            <input id="solo" type="button" class="choix" value="Repartir seul sans rien dire">
            `;

            let soldatEvent = document.getElementById("soldatsAvecMoi");
            soldatEvent.addEventListener("click", soldatEventFunction);
            let combattreEvent = document.getElementById("combattre");
            combattreEvent.addEventListener("click", combattreFunction);
            let soloEvent = document.getElementById("solo");
            soloEvent.addEventListener("click", soloEventRace);

        }
        if (PVACTUELCHEF > 0) {
            apparaitreDé();
            dice.addEventListener("click", rollTheDiceVSCHEF);
            containerPara.innerHTML = `${orcs[3].image}<h4>PV: ${PVACTUELCHEF}<br>Degats: ${orcs[3].degats}</h4>`;
        }

    }
    if (dernierChoixStorage === "alliance") {
        containerPara.innerHTML += `<p>Je suis prêt à vous aider, en compagnie de mes soldats, à trouver ce que vous cherchez. J'envoie des espions tout de suite.</p>`
        containerPara.addEventListener("click", allianceRedirection)
        function allianceRedirection() {
            localStorage.setItem("soldatsOrcWithMe", "oui");
            window.location.href = "spawn.html"; //  AU SPAWN AVEC L ARMEE ORC
        }
    }
    if (dernierChoixStorage === "fightWithAll") {
 
        alert("Un combat potentiellement perdu d'avance face à autant d'ennemie !");
        containerPara.innerHTML = "";
        apparaitreDé();
        apparitionDes4()
        dice.addEventListener("click", rollTheDiceVS4Orcs);
    }
};

// LES BOUCLES DES INPUTS POUR CHAQUE QUESTIONS REPONSES
function setInputFirstContactChef(premierChoix, reponse) {
    premierChoix[reponse].forEach(element => {
        const input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", element);
        input.classList.add("choix");
        containerPara.appendChild(input);
        input.addEventListener("click", setInLocalStorage);
    });
}
function setInputApresPremierChoix(deuxiemeChoix, reponse) {
    deuxiemeChoix[reponse].forEach(element => {
        const input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", element);
        input.classList.add("choix");
        containerPara.appendChild(input);
        input.addEventListener("click", setInLocalStorage2);
    });
}

// LOCAL STORAGE SET IN
function setInLocalStorage(event) {
    localStorage.setItem("firstContactChef", event.target.value);
    window.location.reload();
}
function setInLocalStorage2(event) {
    localStorage.setItem("premierChoix", event.target.value);
    window.location.reload();
}
// function setInLocalStorageLead(event) {
//     localStorage.setItem("lead", event.target.value);
//     window.location.reload();
// }

// LES DES
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function apparaitreDé() {
    let dice = document.getElementById("dice");
    dice.innerHTML = "<img src='../images/dé-96.png'>";
}
// roll the dice

function rollTheDiceVSCHEF() {
    let degatPerso = getRandomInt(degats + 1);
    let degatChef = getRandomInt(orcs[3].degats + 1);
    alert(`Vous infligez ${degatPerso} de degat,\n  ${orcs[3].nom} vous en inflige ${degatChef}`);
    PVACTUEL = PVACTUEL - degatChef;
    PVACTUELCHEF = PVACTUELCHEF - degatPerso;
    localStorage.setItem("PVACTUELCHEF", PVACTUELCHEF);
    localStorage.setItem("PVACTUEL", PVACTUEL);
    window.location.reload();
};

// FUNCTIONS DES CONSEQUENCES

function soldatEventFunction() {
    if (race === "humain") {
        alert("Les orcs sont offensés par votre demande, refusent de vous suivre et vous attaquent.")
        localStorage.setItem("dernierchoix", "fightWithAll");
        window.location.reload();
    }
    else {
        alert("Les soldats orcs vous aclament, et vous retournez au depart de l'aventure en leur compagnie, et continuer votre quête")
        localStorage.setItem("soldatsOrcWithMe", "oui");
        window.location.href = "spawn.html"; //  AU SPAWN AVEC L ARMEE ORC
    }
}

function combattreFunction(){
    console.log("yo");
    localStorage.setItem("dernierchoix", "fightWithAll");
    window.location.reload();
}

function soloEventRace() {
    if (race === "humain") {
        alert("Les orcs vous barrent la route, faites un lancé de dé pour les convaincre de vous laisser partir en paix");
        apparaitreDé()
        dice.addEventListener("click", rollTheDiceOfLuck);
        function rollTheDiceOfLuck() {
            let result = getRandomInt(21);
            alert("Vous avez lancé votre dé et fait un " + result)
            if (result <= 10) {
                alert("Apres avoir vaincu leur chef et été aussi éloquent, ils vous laissent partir en vie... ");
                alert("Vous vous retrouvez a marché loin au sud est du camp, suivi de loin par certains orcs, qui s'assurent que vous ne reveniez pas sur vos pas")
                window.location.href = "NordNord.html";
            }
            if (result >= 11) {
                alert("Les orcs sont offensé par votre discours peu convaincant, et sortent leurs armes...")
                localStorage.setItem("dernierchoix", "fightWithAll");
                window.location.reload();
            }
        }
    }
    else {
        localStorage.setItem("PVACTUEL", pv);
        alert("Vous vous retrouvez a marché plusieurs jours, loin au sud est du camp, suivi de loin par certains orcs, pour s'assurer que vous ne reviendrez pas sur vos pas");
        window.location.href = "NordNord.html";
    }

};
// SEUL CONTRE 4
function apparitionDes4() {
    let ZO = document.createElement("div");
    ZO.innerHTML = `${orcs[4].image}<br><h4 id="zoText">${orcs[4].nom}<br>PV:${orcs[4].PV}<br>Degats:${orcs[4].degats}</h4>`;
    let RETU = document.createElement("div");
    RETU.innerHTML = `${orcs[5].image}<br><h4 id="retuText">${orcs[5].nom}<br>PV:${orcs[5].PV}<br>Degats:${orcs[5].degats}</h4>`;
    let FOUZ = document.createElement("div");
    FOUZ.innerHTML = `${orcs[6].image}<br><h4 id="fouzText">${orcs[6].nom}<br>PV:${orcs[6].PV}<br>Degats:${orcs[6].degats}</h4>`;
    let WAI = document.createElement("div");
    WAI.innerHTML = `${orcs[7].image}<br><h4 id="waiText">${orcs[7].nom}<br>PV:${orcs[7].PV}<br>Degats:${orcs[7].degats}</h4>`;
    containerPara.style.display = "flex";
        containerPara.appendChild(ZO);
        containerPara.appendChild(RETU);
        containerPara.appendChild(FOUZ);
        containerPara.appendChild(WAI);
}

function rollTheDiceVS4Orcs(){
    let ZO = document.getElementById("zoText");
    let RETU = document.getElementById("retuText");
    let FOUZ = document.getElementById("fouzText");
    let WAI = document.getElementById("waiText");

    let degatPerso = getRandomInt(degats + 1);

   
    
    if(orcs[7].PV <= 0){

        console.log("combat terminé");
        
    }
    else if(orcs[6].PV <= 0){     
        let totalDegats =  getRandomInt(orcs[5].degats + 1) + getRandomInt(orcs[6].degats + 1) + getRandomInt(orcs[7].degats + 1);
   
        orcs[7].PV = orcs[7].PV - degatPerso;
        alert(`Vous infligez ${degatPerso} de degat à Retu,\n Le dernier vous inflige ${totalDegats}`);
        PVACTUEL = PVACTUEL - totalDegats;
    }
    else if(orcs[5].PV <= 0){ 
        let totalDegats = getRandomInt(orcs[6].degats + 1) + getRandomInt(orcs[7].degats + 1);

         orcs[6].PV = orcs[6].PV - degatPerso; 
         alert(`Vous infligez ${degatPerso} de degat à Retu,\n Les 2 autres vous infligent ${totalDegats}`);
         PVACTUEL = PVACTUEL - totalDegats;
    }
    else if(orcs[4].PV <= 0){
        let totalDegats =  getRandomInt(orcs[5].degats + 1) + getRandomInt(orcs[6].degats + 1) + getRandomInt(orcs[7].degats + 1);

        orcs[5].PV = orcs[5].PV - degatPerso;     
        alert(`Vous infligez ${degatPerso} de degat à Retu,\n Les 3 autres vous infligent ${totalDegats}`); 
        PVACTUEL = PVACTUEL - totalDegats;
    }
    else{   
        let totalDegats = getRandomInt(orcs[4].degats + 1) + getRandomInt(orcs[5].degats + 1) + getRandomInt(orcs[6].degats + 1) + getRandomInt(orcs[7].degats + 1);
        orcs[4].PV = orcs[4].PV - degatPerso;
        alert(`Vous infligez ${degatPerso} de degat à ZO,\n Ils vous attaquent tous et vous infligent ${totalDegats}`);
        PVACTUEL = PVACTUEL - totalDegats;
    }

    PVACTUEL = 20;
    localStorage.setItem("PVACTUEL", PVACTUEL);
    reapparitionDes4();
    affichagePerso();
    function reapparitionDes4(){
        if(orcs[7].PV <= 0){
            WAI.innerHTML = "WAI est en PLS";
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 20);
            console.log("combat terminé");
        }
        if(orcs[6].PV <= 0){
            FOUZ.innerHTML = "Fouz est en PLS";
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 20);
        }
        if(orcs[5].PV <= 0){
            RETU.innerHTML = "Retu est en PLS";
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 20);
        }
        if(orcs[4].PV <= 0){
            ZO.innerHTML = "Zo est en PLS";
            localStorage.setItem("xpActuel", parseInt(xpActuel) + 20);
        }

    }
}