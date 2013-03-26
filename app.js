/***Declaración de Arreglo***/
var Clientes = new Array(); 


/*******FUNCIÓN loadClient****************/
function loadClients(callback, Clientes)  //Cargar Clientes desde documento JSON
{		
	$.ajax({
		url: 'Clientes.json', 
		context: document.body
	}).done(function(data) {
		Clientes = JSON.parse(data);  //Convierte una cadena de la notación de objetos JavaScript (JSON) en un objeto.	
		callback(Clientes); 
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
	var papa = $( ".panellista"); 
	for (var i = 0; i < listaClientes.length; i++){
		//var cliente = $("p").add("div");
		var cliente = $("div");
		cliente.text("cliente"); 		
		cliente.appendTo(papa);
	}
}



$(document).ready(function(){
	console.log("Cargando");
	loadClients (function(Clientes) { printClients(Clientes);
									  console.log("Finalizado"); 
									  mostrarClientes(Clientes);
									});
}); 

