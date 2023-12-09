'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var clues = document.querySelector(".js_clues");

    var attempts = document.querySelector(".js_attempts");

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
       }       
    
    var randomNumber = getRandomNumber(100);
    console.log("Número aleatorio generado:", randomNumber);


    clues.textContent = "Pista: Escribe el número y dale a Prueba";
    
    var attemptsNumber = 0;

    document.getElementById("submit").addEventListener("click", function() {

        var submitedNumber = parseInt(document.getElementById("number").value);

        attemptsNumber++;
        attempts.textContent = "Número de intentos: " + attemptsNumber;

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