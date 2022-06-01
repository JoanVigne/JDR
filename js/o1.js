
// fleche direction apparaitre apres scenario
let fleches = document.getElementsByClassName("tooltip");
function apparaitreFleche() {
        for (let f = 0; f < fleches.length; f++)
                fleches[f].classList.remove("hidden");
};
// LES STATS DES ORCS 
let retrievedOrcs = localStorage.getItem("orcs");
let orcsCamp = JSON.parse(retrievedOrcs);
// premier orc...
let orcCamp1 = orcsCamp[0];
let nameOrc1 = orcCamp1["nom"];
let PVorc = orcCamp1["PV"];
let degatOrc = orcCamp1["degats"];
// 2eme orc...




let orcCamp = "<img src='../images/perso/orcCamp.png'>";

// ARRIVEE AU CAMP O1
let containerPara = document.getElementById("containerPara");

// TABLEAUX DES CHOIX
const raceChoices1 = {
        humain: [
                "poser son arme",
                "negocier",
                "se battre avec honneur"
        ],
        orc: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ]
}
const raceChoices2 = {
        "nePasRepondre": [
                "Négocier",
                "Sortir mon arme",
                "Se moquer d'eux"
        ],
        "repondreSereinement": [
                "Laissez moi passer.",
                "Vous voulez tater de ma superbe?",
                "Amenez moi au chef de ce lieu"
        ],
        "repondreAgressivement": [
                "Tremblant, ils rangent leurs armes",
                "Ils vous attaquent la peur au ventre [-1degat orcs]",
                "Ils se fendent la poire et vous attaquent"
        ],
        "poserSonArme": [
                "Se laisser faire",
                "Demander un peu de respect",
                "Changer d'avis et se battre pour votre honneur"
        ],
        "negocier": [
                "Charismatique, ils accepent donc de vous emmener au chef, désarmé",
                "Ils apprécient votre charisme, et accepte de vous prendre en duel plutôt qu'à deux",
                "Ridicule, ils vous attaquent sans respect"
        ],
        "seBattreAvecHonneur": [
                "Rennoncer à se battre et les suivre jusqu'à leur chef",
                "Attaquer pendant qu'ils rangent leurs armes",
                "Jurer sur votre honneur(+2degats)"
        ]
};

// ARRIVEE ET SUITE
// recup des choix deja fait
let choixOrc1Arriver = localStorage.getItem("choixOrc1Arriver");
let choixOrc1Second = localStorage.getItem("choixOrc1Second");
function arriverO1() {
        // puis mettre result en condition
        if (choixOrc1Second != null) {
                finalChoixOrc1();
        }
        if (choixOrc1Arriver != null) {
                secondChoixOrc1();
        }
        // si on vient d'arriver sur la page 
        else {
                alert("Vous vous approchez des lumières dans les montagnes, avant meme de comprendre ou vous êtes, deux orcs, haches à la main, vous entourent et empêchent toute fuite.");
                if (race === "humain") {
                        containerPara.innerHTML = "" + orcCamp + orcCamp + "<p>[grognements]<br><strong>Pose ton arme sombre merde</strong><br>[Les deux orcs ont leurs armes à la main..]</p>";
                }
                if (race === "orc") {
                        containerPara.innerHTML = "" + orcCamp + orcCamp + "<p>[grognements]<br><strong>T'es qui?</strong><br>[Main posée sur leurs armes]</p>";
                }
                setInput1(race);
        }
}
arriverO1();
// les input avec les choix
function setInput1(race) {
        raceChoices1[race].forEach(element => {
                const input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("value", element);
                input.classList.add("choix");
                containerPara.appendChild(input);
                input.addEventListener("click", setInLocalStorage);
        });
}
function setInputs(raceChoices2, reponse) {
        raceChoices2[reponse].forEach((element) => {
                const input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("value", element);
                input.classList.add("choix");
                containerPara.appendChild(input);
                input.addEventListener("click", setInLocalStorage2);
        });
}
// SECOND CHOIX 
function secondChoixOrc1() {
        containerPara.innerHTML = "" + orcCamp + orcCamp + "";
        let choixOrc1Arriver = localStorage.getItem("choixOrc1Arriver");
        if (choixOrc1Arriver === "Ne pas répondre") {
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "nePasRepondre");
        }
        if (choixOrc1Arriver === "Répondre sereinement") {
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "repondreSereinement");
        }
        if (choixOrc1Arriver === "Répondre agressivement") {
                apparaitreDé()
                containerPara.innerHTML += `<p>Lancé le dé de 20 pour savoir si votre toupet sera récompensé.</p>`
                dice.addEventListener("click", rollTheDice);
                function rollTheDice() {
                        let result = getRandomInt(21);
                        alert("Vous avez lancé votre dé et fait un " + result)
                        console.log(result);
                        if (result <= 5) {
                                localStorage.setItem("choixOrc1Second", "chef armé");
                        }
                        if (result > 5 && result < 11) {
                                localStorage.setItem("choixOrc1Second", "Charismatique, ils accepent donc de vous emmener au chef, désarmé");
                        }
                        if (result >= 11) {
                                localStorage.setItem("choixOrc1Second", "fight");
                        }
                        window.location.reload();
                }    
        }
        if (choixOrc1Arriver === "poser son arme") {
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "poserSonArme");
        }
        if (choixOrc1Arriver === "negocier") {
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "negocier");
        }
        if (choixOrc1Arriver === "se battre avec honneur") {
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "seBattreAvecHonneur");
        };
}
// TROISIEME CHOIX
function finalChoixOrc1() {
        if (choixOrc1Second === "Négocier"){
                apparaitreDé()
                containerPara.innerHTML = `<p>Lancé le dé de 20 pour savoir si ils sont sensible à vos négociations.</p>`
                dice.addEventListener("click", rollTheDice);
                function rollTheDice() {
                        let result = getRandomInt(21);
                        alert("Vous avez lancé votre dé et fait un " + result)
                        console.log(result);
                        if (result <= 5) {
                                localStorage.setItem("choixOrc1Second", "Charismatique, ils accepent donc de vous emmener au chef, désarmé");
                        }
                        if (result > 5 && result < 11) {
                                // REVENIR A LA PREMIERE DECISION 
                        alert("Ils acceptent de reprendre la conversation du debut");
                                localStorage.removeItem("choixOrc1Second");
                                localStorage.removeItem("choixOrc1Arriver");
                        }
                        if (result >= 11) {
                                localStorage.setItem("choixOrc1Second", "fight");
                        }
                        window.location.reload();
                }    
        }
        if (choixOrc1Second === "Se moquer d'eux"){

        }
        if (choixOrc1Second === "Amenez moi au chef de ce lieu" || choixOrc1Second === "Charismatique, ils accepent donc de vous emmener au chef, désarmé") {
                alert("Après vous avoir désarmé relativement poliement, ils vous emmenent au chef du camp.");
                localStorage.setItem("désarmé", "oui");
                window.location.href = "../html/o2.html";
        }
        if (choixOrc1Second === "fight" || choixOrc1Second === "Sortir mon arme") {
                apparaitreDé()
                containerPara.innerHTML = `${orcCamp}PV: ${PVorc}${orcCamp}<p>Que le combat commence!.</p>`
        }
        if (choixOrc1Second === "chef armé"){
                alert("Ils vous escortent jusqu'au chef du camp, en evitant de croiser votre regard...");
                window.location.href = "../html/o2.html";
        }

}



// LOCAL STORAGE
function setInLocalStorage(event) {
        localStorage.setItem("choixOrc1Arriver", event.target.value);
        window.location.reload();
}
function setInLocalStorage2(event) {
        localStorage.setItem("choixOrc1Second", event.target.value);
        window.location.reload();
}
function setInLocalStorage3(event) {
        localStorage.setItem("finalChoixOrc1", event.target.value);
        window.location.reload();
}

// dice
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}
function apparaitreDé() {
        let dice = document.getElementById("dice");
        dice.innerHTML = "<img src='../images/dé-96.png'>";
}


