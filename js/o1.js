

// LES STATS DES ORCS  DEJA MIS DANS LE PLAYER.JS
// let retrievedOrcs = localStorage.getItem("orcs");
// let orcsCamp = JSON.parse(retrievedOrcs);

// ARRIVEE AU CAMP O1
let containerPara = document.getElementById("containerPara");
let orcCamp = "<img src='../images/perso/orcCamp.png'>";

// Mettre les PVACTUEL dans localStorage
localStorage.setItem("PVACTUELPREMIERORC", orcs[0].PV);
localStorage.setItem("PVACTUELDEUXIEMEORC", orcs[1].PV);


// TABLEAUX DES CHOIX
const raceChoices1 = {
        humain: [
                "poser son arme",
                "Essayer de leur parler",
                "Se montrer prêt au combat"
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
        "Essayer de leur parler": [
                "Leur faire une blague",
                "Négocier avec eux pour rencontrer leur chef",
                "Se moquer d'eux",
                "Leur donner l'ordre de vous emmener au chef"
        ],
        "Se montrer prêt au combat": [
                "Attaquer",
                "Leur donner l'ordre de vous emmener au chef",
                "Leur faire une blague"
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
        else if (choixOrc1Arriver != null) {
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
   
                        if (result <= 5) {
                                localStorage.setItem("choixOrc1Second", "chef armé");
                        }
                        if (result > 5 && result < 11) {
                        } localStorage.setItem("choixOrc1Second", "Charismatique");
                        if (result >= 11) {
                                localStorage.setItem("choixOrc1Second", "fight");
                        }
                        window.location.reload();
                }
        }
        if (choixOrc1Arriver === "poser son arme") {
                containerPara.innerHTML += `<p>Les deux orcs se moquent de vous, commence a s'approcher et s'apprêtent à vous attrapper sans respect.</p>  `
                setInputs(raceChoices2, "poserSonArme");
        }
        if (choixOrc1Arriver === "Essayer de leur parler") {
                containerPara.innerHTML += `<p>Intrigués, ils vous écoutent mais ont une grande envie de vous déboiter</p>  `
                setInputs(raceChoices2, "Essayer de leur parler");
        }
        if (choixOrc1Arriver === "Se montrer prêt au combat") {
                containerPara.innerHTML += `<p>Les deux gardes respectent votre reaction, et attendent de vous d'engager le combat ou...</p>  `
                setInputs(raceChoices2, "Se montrer prêt au combat");
        };
}
// TROISIEME CHOIX
function finalChoixOrc1() {
        if (choixOrc1Second === "Négocier") {
                apparaitreDé()
                containerPara.innerHTML = `<p>Lancé le dé de 20 pour savoir si ils sont sensible à vos négociations.</p>`
                dice.addEventListener("click", rollTheDice);
                function rollTheDice() {
                        let result = getRandomInt(21);
                        alert("Vous avez lancé votre dé et fait un " + result)
                        if (result <= 5) {
                                localStorage.setItem("choixOrc1Second", "Charismatique");
                                alert("Charismatique, ils accepent donc de vous emmener au chef, désarmé")
                        }
                        if (result > 5 && result < 11) {
                                // REVENIR A LA PREMIERE DECISION 
                                alert("Ils acceptent de reprendre la conversation du debut");
                                localStorage.removeItem("choixOrc1Second");
                                localStorage.removeItem("choixOrc1Arriver");
                        }
                        if (result >= 11) {
                                localStorage.setItem("choixOrc1Second", "fight");
                                alert("Votre piètre tentative de négociation a agacé les deux gardes...");
                        }
                        window.location.reload();
                }
        }

        if (choixOrc1Second === "Amenez moi au chef de ce lieu" || choixOrc1Second === "Charismatique" || choixOrc1Second === "Laissez moi passer.") {
                alert("Après vous avoir désarmé relativement poliement, ils vous emmenent au chef du camp.");
                localStorage.setItem("désarmé", "oui");
                localStorage.setItem("choixOrc1Second", "Charismatique");
                redirectionO2();
        }
        if (choixOrc1Second === "Leur donner l'ordre de vous emmener au chef") {
                apparaitreDé()
                containerPara.innerHTML = `<p>Lancé le dé de 20 pour savoir leur reaction...</p>`
                dice.addEventListener("click", rollTheDice);
                function rollTheDice() {
                        let result = getRandomInt(21);
                        alert("Vous avez lancé votre dé et fait un " + result)
                        if (result <= 5) {
                                localStorage.setItem("choixOrc1Second", "Charismatique");
                                alert("Charismatique, ils accepent donc de vous emmener au chef, désarmé")
                        }
                        if (result > 5 && result < 11) {
                                alert("Vous avez une seconde chance de lancé de dé");

                        }
                        if (result >= 11) {
                                localStorage.setItem("choixOrc1Second", "fight");
                                alert("Votre petit numéro de mal alpha n'a fait qu'agacé les deux orcs..");
                        }
                        window.location.reload();
                }
        }
        // PRISON
        if (choixOrc1Second === "Se laisser faire") {
                alert("C'est dans une prison insalubre que vous êtes trainé de force...");
                redirectionO3();
        }
        if (choixOrc1Second === "Demander un peu de respect") {
                alert("Les deux orcs vous frappent[-2 PV] et vous attrappent, rendant cette tentative de demande de respect totalemment inutile");
                localStorage.setItem("PVACTUEL", PVACTUEL - 2);
                redirectionO3();
        }

        // fight
        if (choixOrc1Second === "se battre avec honneur" || choixOrc1Second === "Changer d'avis et se battre pour votre honneur" || choixOrc1Second === "Attaquer" || choixOrc1Second === "Sortir mon arme" || choixOrc1Second === "Vous voulez tater de ma superbe?") {
                localStorage.setItem("choixOrc1Second", "fight");
                window.location.reload();
        }
        if (choixOrc1Second === "Se moquer d'eux" || choixOrc1Second === "Leur faire une blague") {
                alert("Ils vous regardent, dubitatifs, et décident d'engager le combat");
                localStorage.setItem("choixOrc1Second", "fight");
                window.location.reload();
        }
        if (choixOrc1Second === "fight") {
                alert("Que le combat commence!")
                let PVACTUELPREMIERORC = localStorage.getItem("PVACTUELPREMIERORC");
                let PVACTUELDEUXIEMEORC = localStorage.getItem("PVACTUELDEUXIEMEORC");
                let premierOrc = document.createElement("div");
                premierOrc.innerHTML = `${orcs[0].image}<br><h4>${orcs[0].nom}<br>PV: ?<br>${orcs[0].degats}</h4>`;
                let deuxiemeOrc = document.createElement("div");
                deuxiemeOrc.innerHTML = `${orcs[1].image}<br><h4>${orcs[1].nom}<br>PV: ?<br>${orcs[1].degats}</h4>`;
                function apparition() {
                        containerPara.appendChild(premierOrc);
                        containerPara.appendChild(deuxiemeOrc);
                }
                function reapparition() {
                        if (PVACTUELDEUXIEMEORC <= 0) {
                                // quand les 2 orcs sont vaincu:
                                orcs[0].PV = 0;
                                orcs[1].PV = 0;
                                localStorage.setItem("xpActuel", parseInt(xpActuel) + 60);
                                localStorage.setItem("orcs", JSON.stringify(orcs));
                                localStorage.setItem("désarmé", "oui");
                                alert(`Vous avez vaincu les deux gardes. Le combat a rameuter tout le monde, vous acceptez de les suivre jusqu'à leur chef`);
                                redirectionO2();
                                return;
                        }
                        if (PVACTUELPREMIERORC <= 0) {
                                premierOrc.innerHTML = `<p>Argul est au sol`;
                                orcs[0].degats = 0;
                                return;
                        }
                        containerPara.replaceChild(premierOrc, premierOrc);
                        containerPara.replaceChild(deuxiemeOrc, deuxiemeOrc);
                }
                apparition()
                apparaitreDé()
                containerPara.style.display = "flex";
                dice.addEventListener("click", rollTheDice);
                function rollTheDice() {
                        let degatPerso = getRandomInt(degats + 1);
                        let degatPremierOrc = getRandomInt(orcs[0].degats + 1);
                        let degatDeuxiemeOrc = getRandomInt(orcs[1].degats + 1);
                        let totalDegats = degatPremierOrc + degatDeuxiemeOrc;
                        alert(`Vous infligez ${degatPerso} de degat,\n ${orcs[0].nom} vous en inflige ${degatPremierOrc} \n ${orcs[1].nom} vous en inflige ${degatDeuxiemeOrc}`);
                        PVACTUEL = PVACTUEL - totalDegats;
                        if (PVACTUELPREMIERORC >= 1) {
                                PVACTUELPREMIERORC = PVACTUELPREMIERORC - degatPerso;
                        }
                        else {
                                PVACTUELDEUXIEMEORC = PVACTUELDEUXIEMEORC - degatPerso;
                        }
                        localStorage.setItem("PVACTUELPREMIERORC", PVACTUELPREMIERORC);
                        localStorage.setItem("PVACTUELDEUXIEMEORC", PVACTUELDEUXIEMEORC);
                        localStorage.setItem("PVACTUEL", PVACTUEL);
                        affichagePerso();
                        reapparition();
                }
        }
        if (choixOrc1Second === "chef armé") {
                localStorage.setItem("désarmé", "non");
                alert("Ils vous escortent jusqu'au chef du camp, en evitant de croiser votre regard...");
                redirectionO2();
        }
}
// Morts DES ORCS
function redirectionO2() {
        window.location.href = "../html/o2.html";
}
function redirectionO3() {
        window.location.href = "../html/o3.html";

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


