// heal 
let healButton = document.getElementById("healButton");
healButton.addEventListener("click", heal);
function heal(){
    if(PVACTUEL <= 12){
    PVACTUEL = parseInt(PVACTUEL) + 4;
    localStorage.setItem("PVACTUEL", PVACTUEL);
    console.log("fonctionne");
    window.alert("Vous avez trouvez une plante médicinale qui vous rend quelques PV!" );
    healButton.classList.add("hidden");
}
    else {
        healButton.classList.add("hidden");
        alert("Votre vigueur et vitalité vous font maladroitement écraser cette plante fragile qui pouvait soigner vos blessures..");
    }
}