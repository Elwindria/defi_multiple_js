const color = document.querySelector("#color");
const nbr = document.querySelector("#nbr");
var i = 0;

color.addEventListener("click", function(){
    (i++)
    var modulo = i % 2;
    var modulo2 = i % 10;
    console.log(modulo, modulo2);

    if (modulo2 === 0){
        color.style.backgroundColor = "pink";
    } else if (modulo === 0){
        color.style.backgroundColor = "green";
    } else if (modulo === 1){
        color.style.backgroundColor = "yellow";
    }

    nbr.textContent = i;
})