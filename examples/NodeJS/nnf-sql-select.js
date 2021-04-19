## NetOffice Node Function

***Exemplo de Request***	
```javascript	
const body = {campo1: 'teste', campo2: 'teste2'};
const Request = fetch('https://api.netoffice.com.br/GetTickets', {
	method: 'POST',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json','Autorization': 'Bearer 2ihji23hrf23r'}
}).then(function(response){
	return response.json();
})
.then(function(response){
	return response;
});

return Request;
```


***Acesso ao banco de dados***
```javascript	

async function getData() {
	const pool = NetOfficeDB.createPool(NETOFFICE_DB_CONECTION_POOL);
	var Query =  pool.getConnection()
	.then(conn => {
		const res = conn.query("select * FROM clientes_view WHERE id = 123 ");
		//conn.release();
		conn.destroy();
		return res;
	}).then(result => {
		return result[0];
	}).catch(err => {
		console.log(err); // any of connection time or query time errors from above<br>
	});
}
return getData();

return Query;
```

## Variaveis do sistema
NetOfficeTokenAPIV1 - Token da API NetOffice V1 declarado na variável <b></b><br>


## Documentação API NetOffice V1
https://dev.zatos.io/docs/netoffice/api/v1/

## Bibliotecas disponíveis
https://www.npmjs.com/package/node-fetch
https://www.npmjs.com/package/form-data
https://www.npmjs.com/package/body-parser
