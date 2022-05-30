// dice
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}
// fleche direction apparaitre apres scenario
let fleches = document.getElementsByClassName("tooltip");
function apparaitreFleche() {
        for (let f = 0; f < fleches.length; f++)
                fleches[f].classList.remove("hidden");
};
let choixOrc1arriver = localStorage.getItem("choixOrc1arriver");
// ARRIVER AU CAMP O1
let containerPara = document.getElementById("containerPara");
let orcCamp = "<img src='../images/perso/orcCamp.png'>"
function arriverO1() {
        
        alert("Vous vous approchez des lumières dans les montagnes, avant meme de comprendre ou vous êtes, deux orcs, haches à la main, vous entourent et empêchent toute fuite.");
        if (choixOrc1arriver === 1 || choixOrc1arriver === 2) {
                secondChoixOrc1();
        }
        else {
                if (race === "humain") {
                        let input1 = "<input type'button' value='' id='' class='choix'";
                        let input2 = "<input type'button' value='' id='' class='choix'";
                        let input3 = "<input type'button' value='' id='' class='choix'";
                        let para = "<p>Pose ton arme, merde infâme.</p>";
                        containerPara.innerHTML = "" + orcCamp + orcCamp + para +"";
                }
                if (race === "orc") {
                        let input1 = "<input type'button' value='Ne pas répondre' id='' class='choix'><br>";
                        let input2 = "<input type'button' value='Répondre sereinement' id='' class='choix'><br>";
                        let input3 = "<input type'button' value='Répondre agressivement' id='' class='choix'><br>";
                        containerPara.innerHTML = ""+ orcCamp + orcCamp +"<p>Qui va lá?</p>" + input1 + input2 + input3 +"";
                }     
        }
}
arriverO1();

function secondChoixOrc1(){
        
}

// faire apparaitre les dès
let dice = document.getElementById("dice");
dice.innerHTML = "<img src='../images/dé-96.png'>";