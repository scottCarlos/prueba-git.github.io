const container = document.querySelector(".contenedor1");
const fragmento = document.createDocumentFragment();

const colorHexadecimal = () => {
    let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let color = "";
    for (let i = 0; i < 3; i++) {
        do {
            aleatorio = Math.round(Math.random()*100);
        }   while (aleatorio > 15);
        color += array[aleatorio];
    }
    return color;
}


for (let i = 0; i < 5; i++) {
    let div = document.createElement("DIV");
    div.classList.add("circulo");
    let color = colorHexadecimal();
    div.style.backgroundColor = `#${color}`;    
    let image = document.createElement("IMG");
    image.setAttribute("src", "img/mundo.png");
    image.classList.add("world-image");
    div.appendChild(image);
    fragmento.appendChild(div);
}
container.appendChild(fragmento);
const circulos = document.querySelectorAll (".circulo");
circulos.forEach((elemento, indice) => {
    elemento.addEventListener('click', () => {
        alert (`Este es el elemento ${indice+1}`);
    })
})
