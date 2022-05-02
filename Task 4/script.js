/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const outputEl = document.getElementById('output');

fetch(ENDPOINT)
.then(r => r.json())
.then(cars => {
    console.log(cars)
    for(const car of cars){
        const carCard = document.createElement('div')
        const carCardElem = document.createElement('h2')
        carCardElem.innerText = car.brand
        const carModelListElem = document.createElement('ul')
        car.models.sort().forEach(model => {
            const carModelListItemElem = document.createElement('li')
            carModelListItemElem.innerText = model
            carModelListElem.appendChild(carModelListItemElem)
        })
        carCard.append(carCardElem, carModelListElem)
        outputEl.append(carCard)
    }


})



