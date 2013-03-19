	var arrayToLoad = new Array(); 
	
	
	function loadClients(array){
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
	console.log(arrayToLoad);