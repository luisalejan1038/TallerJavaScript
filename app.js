/***Declaración de Arreglo***/
var Clientes = new Array(); 


/*******FUNCIÓN loadClient****************/
function loadClients(callback, listaClientes)  //Cargar Clientes desde documento JSON
{		
	$.ajax({
		url: 'Clientes.json', 
		context: document.body
	}).done(function(data) {
		listaClientes = JSON.parse(data);  //Convierte una cadena de la notación de objetos JavaScript (JSON) en un objeto.	
		callback(listaClientes); 
	});		

}

/*******FUNCIÓN printClient****************/
function printClients(listaClientes)	
{
	for (var i = 0; i < listaClientes.length; i++)
	{	
	console.log(listaClientes[i].id);
	console.log(listaClientes[i].name);
	console.log(listaClientes[i].email);
	console.log(listaClientes[i].tel);
	console.log(listaClientes[i].descripcion);
	console.log("--");
	}	
}


function mostrarClientes(listaClientes){
	var papa = $(".panellista"); 
	
	for (var i = 0; i < listaClientes.length; i++){
		var cliente = $("<div>");
		var nombre = $("<div>");
		var email = $("<div>");
		nombre.text(listaClientes[i].name);
		email.text(listaClientes[i].email);	
		cliente.addClass("itemCliente");
		jQuery.data(cliente[0], "idCliente", listaClientes[i].id);
		papa.append(cliente);
		cliente.append(nombre);
		cliente.append(email); 		
	}
}


function mostrarDetalles(idCliente, listaClientes){
	var detalles = $(".paneldetalles");
	for ( i = 0; i < listaClientes.length; i++){
		var id = $(".id");
		var name = $(".name");
		var email = $(".email");
		var tel = $(".tel");
		var descripcion = $(".descripcion");
			if(listaClientes[i].id == idCliente){
				id.text(listaClientes[i].id);
				name.text(listaClientes[i].name);
				email.text(listaClientes[i].email);
				tel.text(listaClientes[i].tel);
				descripcion.text(listaClientes[i].descripcion);
			}
	}
}


function configurarEventos(listaClientes){
	$(".itemCliente").click(function(){		
		var id = jQuery.data(this, "idCliente"); 
		mostrarDetalles(id, listaClientes); 
	});
};


/*function crearCliente(){
	var nCliente = $(".panelcreacion"); 
	<form>
		input type="submit";
		input type"text";
	</form>
}*/



$(document).ready(function(){
	console.log("Cargando");
	loadClients (function(miListaClientes) { printClients(miListaClientes);
										Clientes = miListaClientes; 
										console.log("Finalizado"); 									  
										mostrarClientes(miListaClientes);
										configurarEventos(miListaClientes);
										//crearCliente();
									});
}); 

