let estilo = 'style="color: blue; font-size: 12px;"';

let tabla = document.createElement("table");
tabla.setAttribute("border", "1");

let fila1 = document.createElement("tr");
let fila2 = document.createElement("tr");

let celda1 = document.createElement("td");
let celda2 = document.createElement("td");

celda1.innerHTML = "Fila 1";
celda2.innerHTML = "Fila 2";

fila1.appendChild(celda1);
fila2.appendChild(celda2);

tabla.appendChild(fila1);
tabla.appendChild(fila2);

tabla.innerHTML =
    "<tr " +
    estilo +
    "><td>Fila 1</td></tr>" +
    "<tr " +
    estilo +
    "><td>Fila 2</td></tr>";

document.body.appendChild(tabla);
