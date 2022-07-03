


const nordNordEstChoix = localStorage.getItem("nordNordEst");
let containerParaText = document.getElementById("containerParaText");
depart();
function depart(){
    if(nordNordEstChoix !== null){
        consequenceChoixNNE();
    }
    else {
        apparaitreFleche();
    }
}

function consequenceChoixNNE(){
    if(nordNordEstChoix === "paysans fuite"){
        containerPara.innerHTML = `<div class="soldat">${soldats[6].image}<h4> ${soldats[6].nom}<br>PV: ${soldats[6].PV}<br>Degats: ${soldats[6].degats}</h4></div>
        <div class="soldat">${soldats[7].image}<h4>${soldats[7].nom}<br>PV: ${soldats[7].PV}<br>Degats: ${soldats[7].degats}</h4></div>
        `;
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
        let raisonner = document.getElementById("seCacher");
        raisonner.addEventListener("click", seCacherFunction);
    }
    
}

function attaquerFunction(){

}

function fuirFunction(){

}

function massacrerFunction(){

}

function seCacherFunction(){

}