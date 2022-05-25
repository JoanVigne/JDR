let nord = document.getElementById("nord");
let est = document.getElementById("est");
let sud = document.getElementById("sud");
let ouest = document.getElementById("ouest");
// REUSSIR A CHOPER L URL POUR L UTILISER
let actualLocation =  "";
// NE FONCTIONNE PAS POUR LE MOMENT

console.log("On veut un url :",actualLocation);
// DIRECTION NORD
nord.addEventListener('click', function () {
    if (actualLocation === "sud.html"){
        window.location.href = "spawn.html";
    }
    if (actualLocation === "sudSud.html"){
        window.location.href = "sud.html";
    }
})
// DIRECTION EST
est.addEventListener('click', function () {
    if (actualLocation === "sud.html"){
        window.location.href = "sudEst.html";
    }
    if (actualLocation === "sudEst.html"){
        window.location.href = "sudEstEst.html";
    }
})
// DIRECTION SUD
sud.addEventListener('click', function () {
    if (actualLocation === "sud.html"){
        window.location.href = "sudSud.html";
    }
    if (actualLocation === "sudSud.html"){
        window.location.href = "sudSudSud.html";
    }

})
// DIRECTION OUEST
ouest.addEventListener('click', function () {
    if (actualLocation === "sud.html"){
        window.location.href = "sudOuest.html";
    }
    if (actualLocation === "sudOuest.html"){
        window.location.href = "sudOuestOuest.html";
    }

})