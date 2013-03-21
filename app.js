	
/***Declaración de Arreglo***/
var Clientes = new Array(); 

/*$.getJSON( "http://localhost:8080/Clientes.json", function(obj) {
	$.each(obj, function(key, value) {
		$("ul").append("<li>" + value.name + "</li>" );
	});
});*/


/*$.ajax({
    url: 'http://localhost:8080/Clientes.json',
    type: 'GET',
    success: function(res) {
        var headline = $(res.responseText).find('a.tsh').text();
        alert(headline);
    }
});*/


function CargarClientes(callback, Clientes)
{		
	$.ajax({
		url: 'Clientes.json', 
		context: document.body
	}).done(function(data) {
		Clientes = JSON.parse(data);	
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
CargarClientes(printClients, Clientes);
}); 



	