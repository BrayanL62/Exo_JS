/* _ Créer une classe Guerrière (Warrior) qui hérite de Player
Créer une méthode kick() qui affiche "Ouille!" dans la console
*/
import {Player} from './player.js';

export class Warrior extends Player {
    kick() {
        console.log("Ouille!");
    }
}