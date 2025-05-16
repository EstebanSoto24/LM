function clickParrafo() {
    let texto = prompt("Que texto quieres incluir: ");
    let contenido = document.createTextNode(texto);
    let nodo = document.createElement("p");
    // Unimos el contenido al nodo
    nodo.appendChild(contenido);
    // Unimos el nodo al body
    document.body.appendChild(nodo);

}

const boton1 = document.getElementById("boton1");

boton1.addEventListener("click", clickParrafo)

//boton1.removeEventListener("click", clickParrafo)
