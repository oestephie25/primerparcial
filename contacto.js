function enviar(){
	nombre=document.forma.nombre.value;
	ap_pat=document.forma.ap_pat.value;
	correo=document.forma.correo.value;

	if (nombre.length==0){
			document.forma.nombre.style.background="red";
			alert("Error, se debe indicar el nombre, es campo obligatorio");
	}
	else{
		nombre=parseInt(nombre)
		if (ap_pat.length==0){
			document.forma.ap_pat.style.background="red";
			alert("Error, se debe indicar el apellido paterno, es campo obligatorio");
		}
		else{
			ap_pat=parseInt(ap_pat)
			if (correo.length==0){
				document.forma.correo.style.background="red";
				alert("Error, se debe indicar el correo, es campo obligatorio");
			}
			else{
				correo=parseInt(correo)
			}
		}
	}
}

function campo_nombre(){
	document.forma.nombre.style.background="purple";
}

function campo_ap_pat(){
	document.forma.ap_pat.style.background="purple";
}

function campo_correo(){
	document.forma.correo.style.background="purple";
}