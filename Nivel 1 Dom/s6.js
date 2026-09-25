function redimensionar() {
    let ancho = document.getElementById("ancho").value;
    let alto = document.getElementById("alto").value;
    let imagen = document.getElementById("imagen");

    imagen.width = Number(ancho);
    imagen.height = Number(alto);
}
