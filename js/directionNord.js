let nord = document.getElementById("nord");
let est = document.getElementById("est");
let sud = document.getElementById("sud");
let ouest = document.getElementById("ouest");
let location =  window.location.href;
// DIRECTION NORD
nord.addEventListener('click', function () {
    if (location === "nord.html"){
        window.location.href = "nordNord.html";
    }
    if (location === "nordNord.html"){
        window.location.href = "nordNordNord.html";
    }
})
// DIRECTION EST
est.addEventListener('click', function () {
    if (location === "nord.html"){
        window.location.href = "nordEst.html";
    }
    if (location === "nordEst.html"){
        window.location.href = "nordEstEst.html";
    }
})
// DIRECTION SUD
sud.addEventListener('click', function () {
    if (location === "nord.html"){
        window.location.href = "spawn.html";
    }
    if (location === "nordNord.html"){
        window.location.href = "nord.html";
    }

})
// DIRECTION OUEST
ouest.addEventListener('click', function () {
    if (location === "nord.html"){
        window.location.href = "nordOuest.html";
    }
    if (location === "nordOuest.html"){
        window.location.href = "nordOuestOuest.html";
    }

})