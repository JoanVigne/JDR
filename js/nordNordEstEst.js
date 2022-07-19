


const nordNordEstChoix = localStorage.getItem("nordNordEst");
const nordNordEstEstChoix = localStorage.getItem("nordNordEstEst");
let containerParaText = document.getElementById("containerParaText");
depart();
function depart(){
    if(nordNordEstEstChoix == "combat"){
        if(soldats[7].PV > 0 || soldats[6].PV > 0){
            attaquerFunction();
            containerPara.innerHTML = `<div class="deuxSoldats"><div class="soldat">${soldats[6].image}<h4> ${soldats[6].nom}<br>PV: ${soldats[6].PV}<br>Degats: ${soldats[6].degats}</h4></div>
            <div class="soldat">${soldats[7].image}<h4>${soldats[7].nom}<br>PV: ${soldats[7].PV}<br>Degats: ${soldats[7].degats}</h4></div>
            </div>`;
        }
        else{
            localStorage.setItem("nordNordEstESt", "combatFini"); 
            
            containerPara.innerHTML = `<h4>Chevaux et cavaliers au sol</h4><br><img src="../images/perso/grave.png"><img src="../images/perso/grave.png">`
            apparaitreFleche(); 
        }
    }
    else if(nordNordEstChoix !== null){
        consequenceChoixNNE();
    }
    else {
        apparaitreFleche();
    }
}

function consequenceChoixNNE(){
    if(nordNordEstChoix === "paysans fuite"){
        containerPara.innerHTML = `<div class="deuxSoldats"><div class="soldat">${soldats[6].image}<h4> ${soldats[6].nom}<br>PV: ${soldats[6].PV}<br>Degats: ${soldats[6].degats}</h4></div>
        <div class="soldat">${soldats[7].image}<h4>${soldats[7].nom}<br>PV: ${soldats[7].PV}<br>Degats: ${soldats[7].degats}</h4></div>
        </div>`;
        containerParaText.innerHTML = `<p>Halte créature de l'enfer, posez votre arme ou subissez notre courou!</p>
                                        <input id="attaquer" type="button" value="Les affronter"><br>
                                        <input id="fuir" type="button" value="Tenter de fuir vers le sud dans les champs">`;
        let attaquer = document.getElementById("attaquer");
        attaquer.addEventListener("click", attaquerFunction);
        let raisonner = document.getElementById("fuir");
        raisonner.addEventListener("click", fuirFunction);
        
    }
    if(nordNordEstChoix === "paysans morts"){
        containerPara.innerHTML = `<p>Les bruits de votre massacre ont attiré d'autres paysants...</p>
                                        <input id="massacrer" type="button" value="Les massacrer"><br>
                                        <input id="seCacher" type="button" value="Se cacher">`;
        let attaquer = document.getElementById("massacrer");
        attaquer.addEventListener("click", massacrerFunction);
        attaquer.addEventListener("click", stockerDansLocalStorage);
        let raisonner = document.getElementById("seCacher");
        raisonner.addEventListener("click", seCacherFunction);
    }
    
}
function stockerDansLocalStorage(){
    localStorage.setItem("nordNordEstEst", "combat")
};
// LE RESULTAT DES DES
let result = getRandomInt(21);

//
function attaquerFunction(){
    localStorage.setItem("nordNordEstEst", "combat");
    apparaitreDé();
    containerParaText.innerHTML = "<p>Un combat à mort !!!</p>";
    dice.addEventListener("click",() => rollTheDiceAttaquer([6,7]));
    let degatsPrecedents = localStorage.getItem("dommagePlayer");
    let degatsPrecedentsRecu = localStorage.getItem("dommageRecu");
    dice.insertAdjacentHTML('afterend', `<p>Dernier degats <br> emis: ${degatsPrecedents}<br>
                        reçu: ${degatsPrecedentsRecu}</p>`);

};
// <<<<<<<<<<<<<<<<<<<<<<<< .FILTER .INDEXOF .SORT >>>>>>>>>>>>>>>>>>>>>>>>>>>
function rollTheDiceAttaquer(ids){
    resultDicePerso = getRandomInt(degats);
    
    resultDegatCavaliers = 0;
    const cavaliers = soldats.filter((soldat) => ids.indexOf(soldat.id) > -1 && soldat.PV > 0);
    // degats cavalier pour chaque cavalier en vie
    cavaliers.forEach(element => {
       resultDegatCavaliers += getRandomInt(element.degats); 
    });
    console.log(resultDegatCavaliers);
    const focused = cavaliers.sort((a, b) => a.PV - b.PV)[0];
    focused.PV = focused.PV - resultDicePerso;
    PVACTUEL = PVACTUEL - resultDegatCavaliers;
    let focusedCavalier = soldats.find((soldat) => soldat.id === focused.id);
    focusedCavalier = focused;
    // dice.innerHTML += `<p>Vos lancé de dès: ${resultDicePerso}<br>
    //                     Les degats de vos adversaires: ${resultDegatCavaliers}</p>`;
    localStorage.setItem("dommagePlayer", resultDicePerso);
    localStorage.setItem("dommageRecu", resultDegatCavaliers);
    localStorage.setItem("PVACTUEL", PVACTUEL);
    localStorage.setItem("soldats", JSON.stringify(soldats));
    resultDiceEnemy = resultDegatCavaliers;
    location.reload();  
    
};
//
function fuirFunction(){

}
//
function massacrerFunction(){

}
//
function seCacherFunction(){
    containerPara.innerHTML = "<p>Faites un lancé de dès pour savoir si vous vous cachez assez bien et rapidement...</p>";
    apparaitreDé();
    dice.addEventListener("click", rollTheDiceHide);
}

function rollTheDiceHide(){
    console.log(result);
    if (result <= speed) {
        containerPara.innerHTML = `<p>Vous arrivez à trouver un buisson bien fourni, et sautez rapidement dedans... <br>
        le groupe de paysants part vers l'ouest, pour voir ce qu'il se passait...</p>;`
        apparaitreFleche();
    }
    else {
        containerPara.innerHTML = `<p>Vous voyez un buisson, vous sautez dedans et tribuchez minablement en faisant beaucoup de bruit.<br>
        les paysants vous voient et appellent les cavaliers qui se trouvaient non loin de là ....</p>`
        localStorage.setItem("nordNordEst", "paysans fuite");
        consequenceChoixNNE();
    }
}