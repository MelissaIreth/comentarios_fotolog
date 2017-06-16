/*aquí va tu código*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);
	guardar();	
}
function guardar(){
	var clave = document.getElementById("key").value;
	var valor = document.getElementById("value").value;

	localStorage.setItem(clave, valor);

	var contenedor = document.getElementById("comentario-final");
	contenedor.innerHTML = "";
	for(var i = 0; i < localStorage.length; i++){
		var el_key = localStorage.key(i);
		var el_valor = localStorage.getItem(el_key);

		contenedor.innerHTML += "<p>" + el_key + " " + 
		el_valor + "</p>";
	}

}
function cleanData(){
	document.getElementById("comentario-final").innerHTML = "";
}

init();