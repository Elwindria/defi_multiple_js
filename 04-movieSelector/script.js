const button = document.querySelector('button');
const output = document.querySelector('p');

const movies =["Gremlins","inception","Mars attack","memento","some_like_it_hot"];

button.addEventListener('click',() =>{
    getMovie = Math.floor(Math.random() * movies.length);
    const response = document.createTextNode(movies[getMovie]);
    output.replaceChildren(response);
})