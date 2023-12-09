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

        var submitedNumber = parseInt(document.getElementById("number").value);


        if (isNaN(submitedNumber) || submitedNumber < 1 || submitedNumber > 100) {
            clues.textContent = "El número debe estar entre 1 y 100";
        } else {

            if (submitedNumber > randomNumber) {
                clues.textContent = "Pista: Demasiado alto";
            } else if (submitedNumber < randomNumber) {
                clues.textContent = "Pista: Demasiado bajo";
            } else {
                clues.textContent = "¡¡¡Has ganado campeona!!!";
            }
        }
    });
});