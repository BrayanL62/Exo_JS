export class Player {
    constructor(nbLifes, pseudo) {
        this.nbLifes = nbLifes;
        this.pseudo = pseudo;
    }
    hello() {
        console.log(`Hello ! I am ${this.pseudo} & i've got ${this.nbLifes} lifes!`)
    }
}