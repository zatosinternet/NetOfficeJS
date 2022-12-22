## NetOffice Node Function


### Bibliotecas disponíveis
- Axios
- Moment
- GraphQL

***Exemplo de Request API***	
```javascript	
//Exemplo GET
 const ticket = await netoffice.API({"method": "GET", "endpoint": `GetTickets?id=${ticketId}`})
	.then((data) => {
	if (data.length == 0) return false;
		return data[0];
	});
	
	
//Exemplo POST
let body =  {
	ref_abertura: ``,
	usuario: ``,
	operador: "backlog",
	assunto: `Assunto`,
	descricao: "",
	cliente_id: 06,
	categoria: 606,
	template: 6,
	canal_abertura: "nnf",
	canal_abertura_id: 68,
	conexao_destino: "os",
	conexao_destino_id: 68
    };
		    
addticket = await netoffice.API({method: "POST", endpoint: "AddTicket", body: body})
.then(function(addTicket) {
    return {"id": addTicket.id_ticket, "protocol": addTicket.protocolo}
});
return Request;
```


***Acesso ao banco de dados***
*AtençÃo - As funções de banco de dados estão disponíveis apenas para contas com serviço de réplica de leitura do banco de dados ou on premise com acesso a views.
```javascript	
//Abre conexão com o banco (opcional)
const conn = await connection();
//Select
const data = await getData(`select nome FROM view_clientes WHERE id = ${}`);
```

## Variaveis do sistema
NetOfficeTokenAPIV1 - Token da API NetOffice V1 declarado na variável <b></b><br>


## Documentação API NetOffice V1
https://dev.zatos.io/docs/netoffice/api/v1/

## Bibliotecas disponíveis
https://www.npmjs.com/package/node-fetch
https://www.npmjs.com/package/form-data
https://www.npmjs.com/package/body-parser
