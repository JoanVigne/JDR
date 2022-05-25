let containerWorld = document.getElementById("containerWorld");

// faire apparaitre et disparaitre le container
function myFunction() { 
    containerWorld.classList.toggle("world");
 }
let body = document.querySelector("body");
body.addEventListener("click", myFunction);

