const input = document.getElementById("input");
const container = document.querySelector(".contenedor-circle");

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

const inputFuction = () => {
    if (container.hasChildNodes() === true) {
        let cantidadCircle = container.childElementCount;
        for(let i = 0; i < cantidadCircle; i++) {
            container.removeChild(container.firstElementChild);
        }
    }
    let fragmento = document.createDocumentFragment();
    let valor = parseInt(input.value);
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
}
input.nextElementSibling.addEventListener('click', inputFuction);
input.addEventListener('keypress', inputFuction);
