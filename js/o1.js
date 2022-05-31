
// fleche direction apparaitre apres scenario
let fleches = document.getElementsByClassName("tooltip");
function apparaitreFleche() {
        for (let f = 0; f < fleches.length; f++)
                fleches[f].classList.remove("hidden");
};

// ARRIVEE AU CAMP O1
let containerPara = document.getElementById("containerPara");
let orcCamp = "<img src='../images/perso/orcCamp.png'>";
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
                "Negocier",
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
                "Ils respectent votre charisme mais décident de vous attaquer(+2degats)",
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
        if(choixOrc1Second != null){
                finalChoixOrc1();
        }
        if(choixOrc1Arriver != null){
                secondChoixOrc1();
        }
        // si on vient d'arriver sur la page 
        else {
                alert("Vous vous approchez des lumières dans les montagnes, avant meme de comprendre ou vous êtes, deux orcs, haches à la main, vous entourent et empêchent toute fuite.");
                if (race === "humain") {
                        containerPara.innerHTML = "" + orcCamp + orcCamp + "<p>[grognements]<br>Pose ton arme sombre merde<br>[Les deux orcs ont leurs armes à la main..]</p>";
                }
                if (race === "orc") {
                        containerPara.innerHTML = "" + orcCamp + orcCamp + "<p>[grognements]<br>T'es qui?<br>[Main posée sur leurs armes]</p>";
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
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                setInputs(raceChoices2, "repondreAgressivement");
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
function finalChoixOrc1(){

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
// faire apparaitre les dès
// let dice = document.getElementById("dice");
// dice.innerHTML = "<img src='../images/dé-96.png'>";
