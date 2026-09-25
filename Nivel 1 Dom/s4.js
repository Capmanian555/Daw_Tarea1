function mostrar() {
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;

    let tabla =
        "<table border='1'>" +
        "<tr><td>" +
        texto1 +
        "</td></tr>" +
        "<tr><td>" +
        texto2 +
        "</td></tr>" +
        "</table>";

    document.getElementById("resultado").innerHTML = tabla;
}
