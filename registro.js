function enviar(){
	tipo=document.forma_registro.tipo.value;
	lugar=document.forma_registro.lugar.value;
	dura=document.forma_registro.dura.value;

	if (tipo.length==0){
			document.forma_registro.tipo.style.background="red";
			alert("Error, se debe indicar el tipo de flor, es campo obligatorio");
	}
	else{
		tipo=parseInt(tipo)
		if (lugar.length==0){
			document.forma_registro.lugar.style.background="red";
			alert("Error, se debe indicar el lugar, es campo obligatorio");
		}
		else{
			lugar=parseInt(lugar)
			if (dura.length==0){
				document.forma_registro.dura.style.background="red";
				alert("Error, se debe indicar la duración, es campo obligatorio");
			}
			else{
				dura=parseInt(dura)
			}
		}
	}
}

function campo_tipo(){
	document.forma_registro.tipo.style.background="purple";
}

function campo_lugar(){
	document.forma_registro.lugar.style.background="purple";
}

function campo_dura(){
	document.forma_registro.dura.style.background="purple";
}