/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

const expensive = 100000000

class Movie {
    constructor (title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
        }
        wasExpensive() {return  this.budget > expensive;
        }
        }

const comedy = new Movie ('Joke', 'Mee', 2000000000 );
const drama = new Movie ('Sad', 'Karantino', 20000000 );

console.log(comedy.wasExpensive());
console.log( drama.wasExpensive());

