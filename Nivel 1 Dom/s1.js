let tabla = document.createElement("table");
tabla.setAttribute("border","1");

let fila1 = document.createElement("tr");
let fila2 = document.createElement("tr");

let celda = document.createElement("td");
let celda2 = document.createElement("td");

celda1.innerHTML = "Fila 1";
celda2.innerHTML = "Fila 2";

fila1.appendChild(celda1);
fila2.appendChild(celda2);
tabla.appendChild(fila1);
tabla.appendChild(fila2);

document.body.appendChild(tabla);