/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator(a1,a2,operator){
switch (operator){
    case 'sum':
        return a1 + a2;
    case 'sub':
        return a1 - a2;   
    case 'multi':
            return a1 * a2;
    case 'div':
            return a1/a2; 
    default:
        return 'kažką ne taip suvedei' ;
}
}
console.log(calculator(4, 2, 'sum'))