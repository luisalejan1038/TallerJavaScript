	
/***Declaración de Arreglo***/
var arrayLoad = new Array(); 

/*******FUNCIÓN loadClients****************/	
function loadClients(arrayToLoad)
{
	for(i = 0; i < 50; i++)
	{
		var client = new Object(); 
		client.id = i; 
		client.name = "Cliente " + i; 
		client.email = "Cliente" + i + "@email.com"; 
		client.tel = "123-456-789";
		client.descripcion = "Comprometido y responsable";
		arrayToLoad.push(client);
	}
}
	

/**********Agregar nuevo cliente*************/
var newClient = new Object(); 
newClient.id = "125"; 
newClient.name = "Cliente125"; 
newClient.email = "Cliente125@email.con"; 
newClient.tel = "123456789";
newClient.descripcion = "Comprometido y serio";


/*******FUNCIÓN addClient****************/
function addClient (clientToAdd, arrayToLoad)
{
	var number = /\d{9}/; 
	var email = /[0-z]\@[0-z]/; 
	var email1 = /\Wcom/; 
	var name = "\D";
	var okNumber = number.exec(clientToAdd.tel);
	var okEmail = email.exec(clientToAdd.email); 
	var okEmail1 = email1.test(clientToAdd.email); 
	if (okEmail && okEmail1 && okNumber && (name != clientToAdd.name))
	{
		arrayToLoad.push(clientToAdd); 
	}
	else
	{
		throw new Error("Verify number, telephone or email ERROR");
	}		
}
	

/*******FUNCIÓN printClient****************/
function printClient(clientArray)	
{
	for (i = 0; i <= clientArray.length; i++)
	{
	console.log("Cliente: " + clientArray[i].name);
	console.log("Id: " + clientArray[i].id);
	console.log("Email: " + clientArray[i].email);
	console.log("Tel: " + clientArray[i].tel);
	console.log("Descripcion: " + clientArray[i].descripcion);
	console.log("--");
	console.log(clientArray.length);
	}
}

loadClients(arrayLoad); 
addClient(newClient, arrayLoad); 
printClient(arrayLoad); 
	