'use strict';

let player1;
let player2;
const choices = ['rock', 'paper', 'scissors'];
const audioArray = ['horns.mp3', 'monke.mp3'];

document.querySelector('.rock').addEventListener('click', function() {
    player1 = choices[0];
    getWinner();
})
document.querySelector('.paper').addEventListener('click', function() {
    player1 = choices[1];
    getWinner();
})
document.querySelector('.scissors').addEventListener('click', function() {
    player1 = choices[2];
    getWinner();
})

function getWinner() {
    randomizePlayer2();
    document.querySelector('.second-player-choice').textContent = player2;
    isPlayer1Winner(player1, player2);
}

function randomizePlayer2() {
    player2 = choices[Math.trunc(Math.random() * 3)]
}

// 1 - player1 win, 2 - player2 win, 0 - draw
function isPlayer1Winner(player1Choice, player2Choice) {
    let result = 0;
    if (player1Choice == choices[0]) {
        if (player2Choice == choices[1]) {
            result = 2;
        }
        if (player2Choice == choices[2]) {
            result = 1;
        }
    }

    if (player1Choice == choices[1]) {
        if (player2Choice == choices[2]) {
            result = 2;
        }
        if (player2Choice == choices[0]) {
            result = 1;
        }
    }

    if (player1Choice == choices[2]) {
        if (player2Choice == choices[0]) {
            result = 2;
        }
        if (player2Choice == choices[1]) {
            result = 1;
        }
    }
    printResult(result);
}

function printResult(result) {
    if (result === 0) {
        document.querySelector('.game-result').textContent = "draw";
    } else if (result === 1) {
        document.querySelector('.game-result').textContent = "winner";
        document.getElementById('rps-name').classList.toggle('rps-name-transform');
        new Audio('hitmarker.mp3').play();
        new Audio('wow.mp3').play();
        new Audio('horns.mp3').play()
        setTimeout(function() { new Audio("monke.mp3").play(); }, 1000);
    } else {
        document.querySelector('.game-result').textContent = "loser";
    }
}