// _ Créer une classe Magician qui hérite de Player. Puis créer une méthode spell() qui affiche "Foudre!" dans la console
// (Bonus) Créer une propriété mana pour le magicien.  Chaque sort utilise 10 points de mana.
// Si il n'y a plus assez de mana, spell() affiche "Pas assez de mana!"

import {Player} from './app.js';

export class Magician extends Player {
    mana = 100;
    spell() {
        if(this.mana === 0) {
            console.log("Pas assez de mana!")
        }
        else {
        console.log("Attaque Tonnerre !");
        this.mana -= 10;
        }
    }
    
}