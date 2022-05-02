/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const outputEl =document.getElementById('output');
document.getElementById('btn').addEventListener('click', (e) => main());

const main = async () => {
    const response =  await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach((item) => {
       const divEl = document.createElement('div');
       const loginEl = document.createElement('h3');
       const avatar_urlEl = document.createElement('p');
       const avatar_img = document.createElement('img');

       avatar_img.src = item.avatar_url;
       loginEl.textContent = item.login;
       avatar_urlEl.textContent = item.avatar_url;

       divEl.append(loginEl, avatar_urlEl, avatar_img);
       outputEl.append(divEl);
       document.getElementById('message').style.display = 'none';
    });

}