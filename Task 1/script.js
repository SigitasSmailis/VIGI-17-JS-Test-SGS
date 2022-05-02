/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const kilosInput = document.getElementById('search').value;
    const kg = +(kilosInput);
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    const output = document.getElementById("output");
    output.textContent = `lb: ${lb.toFixed(2)}`;
    output.append(document.createElement('br'));
    output.append(`g: ${g.toFixed(2)}`) ;
    output.append(document.createElement('br'));
    output.append(`oz: ${oz.toFixed(2)}`) ;
});



