## NetOffice SDK for JS



***Exemplo de API NetOffice***	
```javascript	

	const GetTickets = netoffice.API({method:"GET",endpoint:"GetTickets/?id=22816",body:{}})
	  .then(function(response){
	  return response;
	});

return GetTickets;
```



## Variaveis do sistema
NetOfficeTokenAPIV1 - Token da API NetOffice V1 declarado na variável <b></b><br>


## Documentação API NetOffice V1
https://dev.zatos.io/docs/netoffice/api/v1/

## Bibliotecas disponíveis
https://www.npmjs.com/package/node-fetch
https://www.npmjs.com/package/form-data
https://www.npmjs.com/package/body-parser
