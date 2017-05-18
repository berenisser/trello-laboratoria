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
	var mainInput = document.getElementById("primerInput").value;
	document.getElementById('primerInput').value = "";

	var espacioLista = document.querySelector(".nueva-lista");
	var nuevoInputLista = document.createElement("div");
	nuevoInputLista.classList.add("list-content");
	var divHeader = document.createElement("div");
	divHeader.classList.add("list-header");
	var listaHeader = document.createElement("h4");
	var h4Text = document.createTextNode(mainInput);
	var divEnlace = document.createElement("div");
	var enlaceAgregarTarjeta = document.createElement("a");
	var textoAgregarTarjeta = document.createTextNode("Añadir una tarjeta...");

	espacioLista.appendChild(nuevoInputLista);
	nuevoInputLista.appendChild(divHeader);
	divHeader.appendChild(listaHeader);
	listaHeader.appendChild(h4Text);
	nuevoInputLista.appendChild(divEnlace);
	divEnlace.appendChild(enlaceAgregarTarjeta);
	enlaceAgregarTarjeta.appendChild(textoAgregarTarjeta);

	enlaceAgregarTarjeta.addEventListener('click', function(){
		var divCajaTexto = document.createElement("div");
	   	var cajaTexto = document.createElement('textarea');
			
		nuevoInputLista.appendChild(divCajaTexto);
		divCajaTexto.appendChild(cajaTexto);
		divCajaTexto.appendChild(divEnlace);
		
	});

	//Falta poder presionar enter para que la funcion del boton se ejecute
	//Faltan mas detalles de funcionalidad pero esto es lo que pude lograr

}
