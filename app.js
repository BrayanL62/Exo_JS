/* Consignes classes:
_ Créer une classe Player
Cette classe a une propriété nbLifes que l'utilisateur peut préciser et une propriété pseudo
Ajouter une méthode hello à cette classe, et qui affiche "Bonjour, je suis pseudo et j'ai x vies"
*/

import {Magician} from './magician.js';
import {Warrior} from './warrior.js';
import {Player} from './player.js';



/* _ Dans app.js
Créer un perso Warrior avec un pseudo rigolo (et de la vie à donf) et un perso Magician avec un pseudo badass (pas beaucoup de vies) */

const hades = new Warrior(1000, "Gollum");
console.log(hades);
const mickey = new Magician(100, "Mickey-Merlin");
console.log(mickey);

/*
Lancer kick et hello sur le perso Warrior
Lancer spell et hello sur le perso Magician
Chaque classe est dans son propre fichier.  La création des persos et leurs actions seront faits dans le app.js
*/

hades.kick();
hades.hello();
mickey.spell();
mickey.hello();