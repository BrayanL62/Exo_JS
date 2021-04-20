// Créer un fichier game.js avec deux fonctions: createGame qui vient créer une partie avec deux joueurs possédant chacun 10 points. 

// Une fonction removePoints qui enlève 1 point au joueur spécifié (si 1 est précisé en paramètre, on enlève au joueur 1. Si 2 précisé, on enlève au joueur 2)

// export function createGame(a, b) {
//     console.log(`${a} a 10 points`);
//     console.log(`${b} a 10 points`);
// }

// export function removePoints(nb, b) {
//     console.log(`On retire ${nb} points au ${b}`);
// }

// correction

// let player1, player2;
// export function createGame() {
//     player1 = 10;
//     player2 = 10;
// }

// export function removePoint(nbPlayer) {
//     if(nbPlayer === 1) {player1--;}
//     else if(nbPlayer === 2) {player2--;}
// }

// removePoint(2); // Va enlever 1 point au joueur 2
// removePoint(1); // Va enlever 1 point au joueur 1

// console.log(`Joueur1:${player1} et Joueur2:${player2}`);

let scorePlayer1,scorePlayer2;

export function createGame() {
    scorePlayer1 = 10;
    scorePlayer2 = 10;
    console.log(`Joueur1:${scorePlayer1} et Joueur2:${scorePlayer2}`);
}

export function removePoint(numeroPlayer) {
    if(numeroPlayer === 1) {
        scorePlayer1--;
    }
    else if(numeroPlayer === 2) { 
        scorePlayer2--;
    }
    console.log(`Joueur1:${scorePlayer1} et Joueur2:${scorePlayer2}`);
}