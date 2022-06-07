let retrievedOrcs = localStorage.getItem("orcs");
let orcsCamp = JSON.parse(retrievedOrcs);


let containerPara = document.getElementById("containerPara");
containerPara.innerHTML = `${orcsCamp[3].image}<h4>${orcsCamp[3].nom}</h4>`;

let desarmed = localStorage.getItem("désarmé");

// RECUP DES CHOIX
let choixOrc1Second = localStorage.getItem("choixOrc1Second");
let firstContactChefStorage = localStorage.getItem("firstContactChef");
let premierChoixStorage = localStorage.getItem("premierChoix");
let dernierChoixStorage = localStorage.getItem("dernierchoix")
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
        else {
            localStorage.setItem("dernierchoix", "Reposez-vous");
        }
        
    }
    if (premierChoixStorage === "Se relever et se préparer au combat" || premierChoixStorage === "J'aime me battre" || premierChoixStorage === "Oui, ordres stupides par un chef stupide") {
        localStorage.setItem("dernierchoix", "fight"); 
    }
    if (premierChoixStorage === "Proposer un duel à mort" || premierChoixStorage === "Proposer un duel pour prendre sa place" || premierChoixStorage === "Je veux prendre le controle de ce camp" || premierChoixStorage ==="Avec des armes") {
        localStorage.setItem("dernierchoix", "fightPourLead"); 
    }
    if (premierChoixStorage === "À mains nues"){
        localStorage.setItem("dernierchoix", "fightPourLead"); 
        localStorage.setItem("désarmé", "oui");
    }
    if (premierChoixStorage === "Je plaisante !" || premierChoixStorage === "Demander pardon"){
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
    if (premierChoixStorage === "Oui, je suis blessé par leurs fautes, je souhaite me reposer ici"){
        if (race === "humain") {
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
        else {
            localStorage.setItem("dernierchoix", "Reposez-vous");
        }
    }
    if (premierChoixStorage === "Non, aucun soucis"){

    }
    if (premierChoixStorage === "Je me suis perdu"){

    }
    if (premierChoixStorage === "Demander de l'aide pour votre quête"){
        if(race === "humain"){
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
                    localStorage.setItem("dernierchoix", "Alliance");
                }
                if (result > 5 && result < 11) {
                    alert("Deuxieme chance...");
                    window.location.reload();
                }
                if (result >= 11) {
                    localStorage.setItem("dernierchoix", "Reposez-vous");
                }
            }
        }
    }
}

// CONSEQUENCES DERNIER CHOIX
function consequences() {
    console.log("CONSEQUENCE");
}
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

// LES DES
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function apparaitreDé() {
    let dice = document.getElementById("dice");
    dice.innerHTML = "<img src='../images/dé-96.png'>";
}