
 let retrievedObject = localStorage.getItem("player");
 let player = JSON.parse(retrievedObject);

 let nom = player[0]["nom"];
 let race = player[0]["race"];
 let img = player[0]["image"];
 
 
 let clickpartout = document.addEventListener("click", setStats);
 function setStats() {
     if (race === "orc") {
         let stats = [{
             "pv": 20,
            "force": 7,
            "endurance": 10,
            "speed": 10,
            "intelligence": 7,
            "social": 5
        }];
        localStorage.setItem("PVACTUEL", 20);
        localStorage.setItem("stats", JSON.stringify(stats));
     }
     else if (race === "humain") {
        let stats = [{
            "pv": 15,
           "force": 5,
           "endurance": 11,
           "speed": 12,
           "intelligence": 12,
           "social": 12
       }];
       localStorage.setItem("PVACTUEL", 15);
       localStorage.setItem("stats", JSON.stringify(stats));
     }
     else if (race === "savana") {
        let stats = [{
            "pv": 20,
           "force": 7,
           "endurance": 10,
           "speed": 10,
           "intelligence": 7,
           "social": 5
       }];
       localStorage.setItem("PVACTUEL", 20);
       localStorage.setItem("stats", JSON.stringify(stats));
     }

     window.location.href = "spawn.html"; // rediriger vers l'autre page si le nom est bien rentré
     localStorage.setItem("xpActuel", 0);
 };  