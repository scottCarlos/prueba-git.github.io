const boton = document.getElementById("button");
const container = document.querySelector(".contenedor-circle");
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

boton.addEventListener('click', () => {
    if (container.hasChildNodes() === false) {
        let valor = boton.previousElementSibling.value;
        for (let i = 0; i < valor; i++) {
            var div = document.createElement("DIV");
            div.classList.add("circulo");
            var color = colorHexadecimal();
            div.style.backgroundColor = `#${color}`;    
            var image = document.createElement("IMG");
            image.setAttribute("src", "img/mundo.png");
            image.classList.add("world-image");
            div.appendChild(image);
            fragmento.appendChild(div);
        }
        container.appendChild(fragmento);
        const circulos = document.querySelectorAll(".circulo")
        circulos.forEach((elemento, indice) => {
            elemento.addEventListener('click', () => {
                alert(`Este es el elemento ${indice+1}`);
            })
        })
    }   else {
        container.childNodes.forEach((elemento) => {
            container.removeChild(elemento);
        })

    }
})

