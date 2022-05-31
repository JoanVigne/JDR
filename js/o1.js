
// fleche direction apparaitre apres scenario
let fleches = document.getElementsByClassName("tooltip");
function apparaitreFleche() {
        for (let f = 0; f < fleches.length; f++)
                fleches[f].classList.remove("hidden");
};
let choixOrc1arriver = localStorage.getItem("choixOrc1arriver");
// ARRIVEE AU CAMP O1
let containerPara = document.getElementById("containerPara");
let orcCamp = "<img src='../images/perso/orcCamp.png'>";
// TABLEAUX DES CHOIX
const raceChoices1 = {
        human: [
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
        nePasRepondre: [
                "Négocier avec eux",
                "Sortir mon arme",
                "Se moquer d'eux"
        ],
        repondreSereinement: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ],
        repondreAgressivement: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ],
        poserSonArme: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ],
        negocier: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ],
        seBattreAvecHonneur: [
                "Ne pas répondre",
                "Répondre sereinement",
                "Répondre agressivement"
        ]
};
// PARCOURIR LE TABLEAU raceChoices2 POUR SAVOIR SI L UNE DES OPTIONS A ETE CLIQUÉ
let result = true;
        for(let i = 0; i < raceChoices2.lenght; i++){
                if (raceChoices2[i] <= 0){
                        result = false;
                        break;
                }
        }
// ARRIVEE ET SUITE
function arriverO1() {
        // puis mettre result en condition
        if (result === true ) {
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
// deuxieme choix
function setInput2(){
        raceChoices2[reponse].forEach(element => {
                const input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("value", element);
                input.classList.add("choix");
                containerPara.appendChild(input);
                input.addEventListener("click", setInLocalStorage2);
        });
}
// function setInput2(){
//         // const reponse = localStorage.getItem("choixOrc1arriver");
//         raceChoices2[].forEach(element => {
//                 const input = document.createElement("input");
//                 input.setAttribute("type", "button");
//                 input.setAttribute("value", element);
//                 input.classList.add("choix");
//                 containerPara.appendChild(input);
//                 input.addEventListener("click", setInLocalStorage);
//         });
// }
function secondChoixOrc1() {
        containerPara.innerHTML = "" + orcCamp + orcCamp + "";

        if (choixOrc1arriver === "Ne pas répondre") {
                // let input1 = `<input type="button" class="choix" value="${raceChoices2["nePasRepondre"][0]}">`;
                // let input2 = `<input type="button" class="choix" value="${raceChoices2["nePasRepondre"][1]}">`;
                // let input3 = `<input type="button" class="choix" value="${raceChoices2["nePasRepondre"][2]}">`;
                containerPara.innerHTML += `<p>Les deux gardes commencent à s'impatienter,<br>ils sortent leurs armes.</p>  `
                // ${input1}${input2}${input3}
        }

        if (choixOrc1arriver === "Répondre sereinement") {

        }
        if (choixOrc1arriver === "Répondre agressivement") {

        }
        if (choixOrc1arriver === "poser son arme") {

        }
        if (choixOrc1arriver === "negocier") {

        }
        if (choixOrc1arriver === "se battre avec honneur") {

        };
}
// LOCAL STORAGE
function setInLocalStorage(event) {
        console.log('event:', event.target.value)
        localStorage.setItem("choixOrc1arriver", event.target.value);
        window.location.reload();
}
function setInLocalStorage2(){
        
}

// dice
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}
// faire apparaitre les dès
// let dice = document.getElementById("dice");
// dice.innerHTML = "<img src='../images/dé-96.png'>";