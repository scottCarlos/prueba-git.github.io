const container = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();

const colorRGB = () => {
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

var n = prompt("Ingrese la cantidad de circulos: ");
for (let i = 0; i < n; i++) {
    let div = document.createElement("DIV");
    div.classList.add("circulo");
    let color = colorRGB();
    div.style.backgroundColor = `#${color}`;    
    let image = document.createElement("IMG");
    image.setAttribute("src", "img/mundo.png");
    image.classList.add("word-image");
    div.appendChild(image);
    fragmento.appendChild(div);
}
container.appendChild(fragmento);
const circulo = document.querySelectorAll (".circulo");
circulo.forEach((elemento, indice) => {
    elemento.addEventListener('click', () => {
        alert (`Este es el elemento ${indice+1}`);
    })
})
