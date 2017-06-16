/*aquí va tu código*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", datos);
	guardar();	
}

function datos(){
	var clave = document.getElementById("key").value;
	var valor = document.getElementById("value").value;

	localStorage.setItem(clave, valor);
	guardar();

	document.getElementById("key").value = "";
	document.getElementById("value").value = "";
}

function guardar(){
	var contenedor = document.getElementById("comentario-final");
	contenedor.innerHTML = "";

	for(var i = 0; i < localStorage.length; i++){
		var el_key = localStorage.key(i);
		var el_item = localStorage.getItem(el_key);

		var div = document.createElement("div");
		div.classList.add("div-comentario");

		var el_titulo = document.createElement("h4");
		el_titulo.classList.add("eltitulo");
		var key_new = document.createTextNode(el_key);
		el_titulo.appendChild(key_new);

		var el_texto = document.createElement("p");
		el_texto.classList.add("el-texto");
		var new_item = document.createTextNode(el_item);
		el_texto.appendChild(new_item);

		div.appendChild(el_titulo);
		div.appendChild(el_texto);
		contenedor.appendChild(div);
	}

}

init();

var clear = document.getElementById("boton-clean");
clear.addEventListener("click", cleanData);

function cleanData(){
	window.localStorage.clear();
	guardar();
}
