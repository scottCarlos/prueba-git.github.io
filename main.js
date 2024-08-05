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
        elemento.title = "CLICKEAME";
        elemento.addEventListener('click', () => {
            alert(`Este es el elemento ${indice+1}`);
        })
    })
}
input.nextElementSibling.addEventListener('click', inputFuction);
input.addEventListener('keypress', inputFuction);





//contenedor-2
const nave = document.querySelector(".nave");
nave.addEventListener('click', () => {
    let tamaño = nave.clientWidth;
    if (tamaño < 260) {
        tamaño += 20;
    }   else {
        alert("MAXIMO TAMAÑO ALCANZADO");
        tamaño = 120;
    }
    nave.style.width = `${tamaño}px`;
})





//contenedor-3
const select = document.getElementById("select");
select.readOnly = true;
const buttonIniciar = document.getElementById("iniciar");
const respuesta = document.getElementById("contenido-ahorcados");
const palabrasAleatorias = ["manzana", "pera", "cuchillo", "platano", "mandarina"];
const letrasEncontradas = [];
let palabraSecreta;
let palabraHallada;
let intentos;
const refresh = () => {
    select.value = "";
}
const iniciarJuego = () => {
    refresh();
    respuesta.previousElementSibling.setAttribute("src", "img/ahorcados-1.png");
    select.readOnly = false;
    aleatorio = Math.floor(Math.random() * palabrasAleatorias.length);
    palabraSecreta = palabrasAleatorias[aleatorio];
    intentos = palabraSecreta.length;
    palabraHallada = "";
    for(let i = 0; i < palabraSecreta.length; i++) {
        palabraHallada += '_';
    }
    letrasEncontradas.splice(0, palabraSecreta.length);
    respuesta.innerHTML = palabraHallada;
    select.previousElementSibling.innerHTML = `Intentos: ${intentos}`;
}

buttonIniciar.addEventListener('click', iniciarJuego);
const ahorcados = () => {
    if (intentos != 0) {
        if (intentos == Math.round(palabraSecreta.length/2 )+ 1) {
            respuesta.previousElementSibling.setAttribute("src", "img/ahorcados-2.png");
        }
        palabraHallada = "";
        letra = select.value;
        refresh();
        if (palabraSecreta.includes(letra) == true && letra != '') {
            if (letrasEncontradas.includes(letra) == false) {
                letrasEncontradas.push(letra);
            }
        }   else if (palabraSecreta.includes(letra) == false) {
            intentos--;
        }
        for (let i = 0; i < palabraSecreta.length; i++) {
            presente = false;
            for (let j = 0; j < letrasEncontradas.length; j++) {
                if (palabraSecreta[i] == letrasEncontradas[j]) {
                    presente = true;
                    break;
                }
            }
            if (presente == true) {
                palabraHallada += palabraSecreta[i];
            }   else {
                palabraHallada += '_';
            }
        }
        if (palabraHallada == palabraSecreta) {
            alert(`Hallaste la palabra!, es ${palabraSecreta}`);
            iniciarJuego();
        }
        if(intentos == 0) {
            intentos = 0;
            alert("PERDISTE!");
            select.readOnly = true;
            respuesta.previousElementSibling.setAttribute("src", "img/ahorcados-3.png");
            buttonIniciar.innerHTML = "VOLVER A INICIAR";
        }
        respuesta.innerHTML = `${palabraHallada}`;
    }   else{
        select.disable = true;
    }
    select.previousElementSibling.innerHTML = `Intentos: ${intentos}`;
}
select.nextElementSibling.addEventListener('click', ahorcados);
select.addEventListener('keypress', ahorcados);

