//Se llama a los elementos input y boton
var mainInput = document.getElementById("primerInput");
var mainBoton = document.getElementById('boton-guardar');
var mainDiv = document.getElementById("contenedor-lista");

mainInput.addEventListener("click", function(){
    mainBoton.classList.toggle("show");
});

mainBoton.addEventListener("click", guardarLista);

//Funcion que crea Lista despues de ser clickeado

function guardarLista(){
	var espacioLista = document.querySelector(".nueva-lista");
	var nuevoInputLista = document.createElement("div");
	nuevoInputLista.classList.add("list-content");
	var divHeader = document.createElement("div");
	divHeader.classList.add("list-header");
	var listaHeader = document.createElement("h2");
	var h2Text = document.createTextNode(mainInput.value);
	var enlaceAgregarTarjeta = document.createElement("a");
	var textoAgregarTarjeta = document.createTextNode("Añadir una tarjeta...");

	espacioLista.appendChild(nuevoInputLista);
	nuevoInputLista.appendChild(divHeader);
	divHeader.appendChild(listaHeader);
	listaHeader.appendChild(h2Text);
	divHeader.appendChild(enlaceAgregarTarjeta);
	enlaceAgregarTarjeta.appendChild(textoAgregarTarjeta);
}











/*
mainInput.addEventListener("click", function(){
    if (mainBoton.style.display === 'none') {
        mainBoton.style.display = 'block';
    } else {
        mainBoton.style.display = 'none';
    }
});
*/


