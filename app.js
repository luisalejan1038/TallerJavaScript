	var arrayToLoad = new Array(); 
		
	function loadClients(array)
	{
		for(i = 0; i <= 50; i++){
			var client = new Object(); 
			client.id = i; 
			client.name = "Cliente " + i; 
			client.email = "Cliente" + i + "@email.com"; 
			client.tel = "123-456-789";
			client.descripción = "Comprometido y responsable";
			array.push(client);
		}
	}
	
	loadClients(arrayToLoad); 
//	console.log(arrayToLoad);
	
	var newClient = new Object(); 
	newClient.id = "125"; 
	newClient.name = "Cliente50"; 
	newClient.email = "Cliente125@.com"; 
	newClient.tel = "123456781";
	newClient.descripcion = "Comprometido y serio";

	function addClient (nClient, array)
	{
		var number = /\d{9}/; 
		var email = /@\*(?:.com)/; 
		var name = " ";
		var okNumber = number.exec(nClient.tel);
		var okEmail = email.exec(nClient.email); 
		if (okNumber && (name != nClient.name) && okEmail)
		{
			array.push(nClient); 
		}
		else
		{
			window.alert("Verify number, telephone or email");
		}		
	}
	
	addClient(newClient, arrayToLoad); 
//	console.log(arrayToLoad);
	