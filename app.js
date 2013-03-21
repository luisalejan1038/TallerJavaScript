	
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
		console.log("Llegaron datos: " + Clientes.length);
	});		
	
}
	

function callbackPrueba(items)
{
	console.log("Datos recibidos: " + items.length);
}
	
	
function callbackPrueba2(items)
{
	console.log("Tamaño: " + items.length);
}
	

function callbackPrueba3(listacompleta)
{
	console.log("La lista es: ");
	console.log(Clientes);
}


/*******FUNCIÓN printClient****************/
function printClients(listaClientes)	
{
	for (i = 0; i < listaClientes.length; i++)
	{	
	console.log(listaClientes[i].id);
	console.log(listaClientes[i].name);
	console.log(listaClientes[i].email);
	console.log(listaClientes[i].tel);
	console.log(listaClientes[i].descripcion);
	console.log("--");
	}	
}


$(document).ready(function(){
	console.log("Cargando");
	/* CargarClientes(printClients, Clientes); */
	loadClients (function(Clientes) { printClients(Clientes);
									  console.log("Finalizado");
									});
}); 
	