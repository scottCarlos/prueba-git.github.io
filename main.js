const container = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    let color = Math.round (Math.random() * 1000);
    let div = document.createElement("DIV");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = `#${color}`;
    fragmento.appendChild(div);
}
container.appendChild(fragmento);
