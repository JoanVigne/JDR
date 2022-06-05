let retrievedOrcs = localStorage.getItem("orcs");
let orcsCamp = JSON.parse(retrievedOrcs);


let containerPara = document.getElementById("containerPara");
containerPara.innerHTML = `${orcsCamp[3].image}<h4>${orcsCamp[3].nom}</h4>`;
// const du local storage
let desarmed = localStorage.getItem("désarmé");
let choixOrc1Second = localStorage.getItem("choixOrc1Second");
let premierChoixStorage = localStorage.getItem("premierChoix");
const premierChoix = {
    "Charismatique": [
            "Négocier",
            "Sortir mon arme",
            "Se moquer d'eux"
    ],
    "fight": [
            "Laissez moi passer.",
            "Vous voulez tater de ma superbe?",
            "Amenez moi au chef de ce lieu"
    ],
    "chef armé": [
            "Tremblant, ils rangent leurs armes",
            "Ils vous attaquent la peur au ventre [-1degat orcs]",
            "Ils se fendent la poire et vous attaquent"
    ]
};

if (firstContactChef !== null) {
    firstContactChef()
}



function firstContactChef(){
    if(desarmed === "non"){
        containerPara.innerHTML += `<p>"Je vois que vous n'êtes pas du genre à qu'on vous enlève votre arme."</p>`
    }
    if(race === "orc"){
        containerPara.innerHTML += `<p>"Bienvenue frère orc"</p>`
    }
    if(race === "humain"){
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



// les inputs
// function setinputExcuse(){
//     const inputExcuse = document.createElement("input");
//     inputExcuse.setAttribute("type", "button");
//     inputExcuse.setAttribute("value", "S'excuser");
//     inputExcuse.classList.add("choix");
//     containerPara.appendChild(inputExcuse);
//     inputExcuse.addEventListener("click", setInLocalStorage);
//     }
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

function setInLocalStorage(event) {
    localStorage.setItem("firstContactChef", event.target.value);
    window.location.reload();
}