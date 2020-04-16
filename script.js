// Séléctionner les aiguilles de montre
// const AIGUILLEHR = document.querySelector("#hour");
// const AIGUILLEMIN = document.querySelector("#minute");
// const AIGUILLESEC = document.querySelector("#second");

// const AIGUILLEHR = document.querySelector(".hour-arm");
// const AIGUILLEMIN = document.querySelector(".minute-arm");
// const AIGUILLESEC = document.querySelector(".second-arm");


//Extraire l'heure actuel à l'aide de l'objet Date()



//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles
// function demarrerLaMontre() {
// const now = new Date();
// const seconds=now.getSeconds();
// const secdeg=((seconds/60)*360);



// // Exercuter la fonction chaque second
// //  setInterval(demarrerLaMontre, 1000);
// var interval = setInterval(demarrerLaMontre, 1000);


const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


function demarrerLaMontre(){
 
         const now = new Date();
        const seconds = now.getSeconds();
        const secDeg = (seconds/60*360 );
        AIGUILLESEC.style.transform = `rotate(${secDeg}deg)`;
        
        
        const mins = now.getMinutes();
        const minDeg = (mins/60*360);
        AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;
        
        
        const hour = now.getHours();
        const hourDeg = (hour/12*360);
        AIGUILLEHR.style.transform = `rotate(${hourDeg}deg)`;
}
var interval = setInterval(demarrerLaMontre, 1000);

