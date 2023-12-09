'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var clues = document.querySelector(".js_clues");

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
       }       
    
    var randomNumber = getRandomNumber(100);
    console.log("Número aleatorio generado:", randomNumber);


    clues.textContent = "Pista: Escribe el número y dale a Prueba";


    document.getElementById("submit").addEventListener("click", function() {

        var numeroIntroducido = parseInt(document.getElementById("number").value);


        if (numeroIntroducido > getRandomNumber) {
            cluesElement.textContent = "Pista: Demasiado alto";
        } else {
 
            cluesElement.textContent = "Pista: A saber qué has hecho, Maricarmen";
        }
    });
});