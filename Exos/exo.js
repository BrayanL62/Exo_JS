//Checker si un nombre est pair ou impair (on affiche juste "pair" ou "impair" selon la valeur d'un nombre dans une variable)
// let number = 13;
// number % 2 === 0? console.log("c'est un nombre pair") : console.log('Nombre impair');

//Checker si un élève a la moyenne sur une note (si c'est supérieur à 10, on lui dit que c'est un BG. Sinon qu'il doit travailler plus)

// let moyenne = 8;
// moyenne >= 10 ? console.log("Quel BG!") : console.log("Va falloir bosser garçon!");

// Ecrire une fonction fléchée qui retourne un message si un nombre  proposé en paramètre est pair ou impair  ("pair" ou "impair")
// let oddOrEven = number => number%2 === 0 ? "pair!" : "impair!";
// console.log(oddOrEven(31));

// let getMsgOddOrEven = nb => nb%2 === 0 ? "pair" : "impair";
// console.log(getMsgOddOrEven(12));

// Ecrire une fonction fléchée qui retourne un booléen pour une note donnée si  c'est supérieur ou égal à 10 -> true, sinon false
// let boolMark = (mark) => {
//     if(mark > 10) {
//         return true;
//     }
// }
// let greaterThanTen = mark => mark>=10;

// console.log(greaterThanTen(12));

/*
Créer le tableau marksPlusOne dont l'objectif est d'avoir une copie pour
attribuer un point supplémentaire par note dans mon tableau originel
*/

// let marks = [12,11,9,8,20, 2, 1, 4, 15];
// let marksPlusOne = marks.map(marks => marks+1);
// console.log(marksPlusOne);

// Créer un tableau marksGreaterThanFive qui ne récupère
// les notes que si elles sont strictement supérieurs à 5

// let marksGreaterThanFive = marks.filter(mark => mark > 5);
// console.log(marksGreaterThanFive);