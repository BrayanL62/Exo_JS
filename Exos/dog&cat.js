/* Créer une classe animal avec une méthode breathe (affiche dans la console "**Respire**")

Créer une classe dog qui hérite d'animal + une méthode bark (affiche dans la console "**wouf wouf**)

Créer une classe cat qui hérite d'animal + une méthode meow (affiche dans la console "**Miaouuuuu**")

Instancier un chat et un chien.
Afficher pour chacun sa respiration et son cri */

class Animals {
    breath() {
        console.log("**Inspire, Expire**");
    }
}

class Dog extends Animals {
    bark() {
        console.log("**Woof, Woof**");
    }
}

class Cat extends Animals {
    meow() {
        console.log("**Meooww**");
    }
}

let ryuk = new Cat();
ryuk.breath()
ryuk.meow()
let bobby = new Dog();
bobby.breath();
bobby.bark();