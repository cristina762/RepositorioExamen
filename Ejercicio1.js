
function calcular() {
	
	var operacion;

	for (var i = 0; i < cantidad; i++) {
		if (radios[i].checked) {
			operacion = radios[i].value;
			break;
		}
	}

	var entradaproducto = parseInt(document.getElementById("entrada producto").value);
	var salidaproducto = parseInt(document.getElementById("salida producto").value);

	var resultado;
	
	if (operacion === "suma") {
		resultado = numero1 + numero2;
	}
	else {
		resultado = numero1 - numero2
	}
	
	document.getElementById("producto" = unidades);