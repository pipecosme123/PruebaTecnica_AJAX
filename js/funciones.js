function cargarElementos(url, elemento){
    var request = XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    elemento.innerHTML = request.responseText;
}

function cargarFormulario1(){
    cargarElementos("formulario1.html", document.getElementById("contenidoDinamico"));
}

function cargarFormulario2(){
    cargarElementos("formulario2.html", document.getElementById("contenidoDinamico"));
}