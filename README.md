# NetOfficeJS Internal API

## API

### `netoffice = new NetOffice();`




### API Rest NetOffice
Documentação V1: https://dev.zatos.io/docs/netoffice/api/v1/

```javascript

data = {
	method: "POST", /* ou "GET" */
	endpoint: "AddTicket", /* "GetTickets?protocolo=1234" */,
	body: {"idteste":"2345"}, /* somente para POST */
	v: 1 /* versao da API */
}

netoffice.API(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```



## Internal API End-points
# Tickets

Mais em Documentação V1: https://dev.zatos.io/docs/netoffice/api/v1/
Instâncias que suportam o NetOfficeJS, por padrão declaram as seguintes variáveis para identificar a "seção pai":
Ex:
```
var netofficejsItem = "os";
var netofficejsItemID = 999;  
```

* **transferTicket** - Transfere a responsabilidade de um ticket
```javascript
data = {
	id: "9999", //ID do ticket
	operador: "usuario@empresa.com.br", // login do novo responsável
	comentario: "Ticket transferido" // Comentário (opcional)
	}
netoffice.transferTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **findTicket** - Busca Tickets
```javascript
data = {
	relacao_id: "",
	ref_abertura: "",
	canal_abertura: "",
	canal_abertura_id: ""
};
netoffice.findTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **setTemplateTicket** - Altera o Template de um ticket
```javascript
data = {
	ticket_id: 0,
	template_id: 0
};
netoffice.setTemplateTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **setGroupTicket** - Altera o Projeto/Equipe de um ticket
```javascript
data = {
	ticket_id: 0,
	group_id: 0
};
netoffice.setGroupTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **setDescricaoTicket** - Altera a descrição de um ticket
```javascript
data = {
	ticket_id: 0,
	descricao: 0
};
netoffice.setDescricaoTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **setEsforcoTicket** - Atualiza o esforço do ticket
```javascript
data = {
	ticket_id: "999",
	horas: "01"
	minutos: "00"
};
netoffice.setEsforcoTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```



* **setDataDesejadaTicket** - Atualiza a data desejada do ticket
```javascript
data = {
	ticket_id: "999",
	data_desejada: "2020-10-10 10:00:00"
};
netoffice.setDataDesejadaTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **setSeqTicket** - Atualiza a sequencia de responsáveis do ticket
```javascript
var sequencia = JSON.stringify([{
		operador: "login2",
		data:"2020-10-10 10:00:00", //opcional
		obs: "Foo" //opcional
		},{
		operador: "login2",
		data:"2020-10-10 10:00:00", //opcional
		obs: "Foo" //opcional
		}]);

var data = {
	sequencia: sequencia
	};
netoffice.setSeqTicket(ticket_id,data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **setOperadorOriginalTicket** - Altera o Responsável original de um ticket
```javascript
data = {
	ticket_id: "9999", //ID do ticket
	operador: "usuario@empresa.com.br", // login do novo responsável
	}
netoffice.setOperadorOriginalTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **addLembreteTicket** - Cria um lembrete par ao ticket
```javascript
data = {
	ticket_id: "999",
	data_lembrete: "", //AAAA-MM-DD HH:MM:SS
	usuario: "login", //opcional
	descricao: "Foo", //opcional
	tipo: "notifica_user", //opcional (notifica_user(padrão) ou interacao)
};
netoffice.addLembreteTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **getLembreteTicket** - Lista lembretes criados para o ticket
```javascript

netoffice.getLembreteTicket(ticket_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```



* **delLembreteTicket** - Remove lembrete criado para o ticket
```javascript

netoffice.delLembreteTicket(ID_LEMBRETE) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```



* **addAprovador** - Cria um lembrete par ao ticket
```javascript
data = {
	ticket_id: "999",
	aprovador: "login"
};
netoffice.addAprovador(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


```javascript
//Na interface de visualizaçào de tickets o objeto com a estrutura do ticket fica disponível na variável:

NetofficeJSTicketData = {id: "16876", id_cliente: "1419", email: "", data: "2020-06-23 23:50:41", …}

```

	


# Builder


* **BuilderGetData** - Recebe dados de seção do **NetOffice Builder**
```javascript
var no_builder_id = 0; //Opcional, esta variável já é definida na view da seção
var secao_pai = 0; //Opcional, label da seção pai
var secao_pai_id = 0; //Opcional, ID da seção pai
netoffice.BuilderGetData(no_builder_id,secao_pai,secao_pai_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **BuilderGetDataItem** - Recebe dados um único item de seção do **NetOffice Builder**
```javascript
var no_builder_id = 0; //ID do APP ou Seção
var item_id = 0; ///ID do item
netoffice.getSecaoItemData(no_builder_id,item_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

```javascript
//Em todas as instâncias no Builder são decladas as variváveis padrões:

var netofficejsItem = "builder-9";
var netofficejsItemID = 999;  

//Váriaveis declaradas na View do Item: 
var builderId = 9;
var builderItemId = 999;

```

* **Builder - NetOffice Node Function**
```javascript
data = {
	id: "2ru238y2394823237r239",
	method: "GET", /* GET ou POST */
	query: "var1=123&var2=321",
	route: "rota_nome", /* para URL de rotas, padrão: "run" */
	headers: {
		"user":"email@email"
		},
	body: {"idteste":"2345"} /* quando POST */
}
netoffice.NNF(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```




## Builder Events

```javascript

document.addEventListener('NOBuilderAddItem', function (e) { console.log(e.detail) });

document.addEventListener('NOBuilderEditItem', function (e) { console.log(e.detail) });

document.addEventListener('NOBuilderRemoveItem', function (e) { console.log(e.detail) });

```


## Builder UI

* **BuilderView** - Recebe estrutura HTML do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0;
var secao_pai = ""; //ex,: "projeto","builder-ID"
var secao_pai_id = 0; 
var view_only = false; //não são construídos os botões de "editar"
var extra = {
	filter: "[{\"field\":\"ca_000\", \"condition\":\"=\", \"value\":\"10\" }]"	
	}; //Opcional
netoffice.BuilderView(no_builder_secao_id,secao_pai,secao_pai_id,view_only,extra) 
.then(function(v) {
      //Retorno HTML - v.html   
}) 
.catch(function(v) {

});
```

* **BuilderGetForm** - Recebe estrutura HTML do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0;
var secao_pai = ""; //ex,: "projeto","builder-ID"
var secao_pai_id = 0; 
var edit = false;
netoffice.BuilderGetForm(no_builder_secao_id,secao_pai,secao_pai_id,edit) 
.then(function(v) {
      //Retorno HTML - v.html   
}) 
.catch(function(v) {

});
```

* **BuilderGetAddButton** - Recebe estrutura HTML do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0;
var secao_pai = ""; //ex,: "projeto","builder-ID"
var secao_pai_id = 0; 
netoffice.BuilderGetAddButton(no_builder_secao_id,secao_pai,secao_pai_id) 
.then(function(v) {
      //Retorno HTML - v.html   
}) 
.catch(function(v) {

});
```



* **getSecaoAnexos** - Recebe estrutura HTML de anexos
```javascript
var no_builder_secao_id = 0; 
var secao_pai = ""; //ex,: "projeto","builder-ID"
var secao_pai_id = 0;
netoffice.getSecaoAnexos(no_builder_secao_id,secao_pai,secao_pai_id) 
.then(function(v) {
      //Retorno HTML - v.html   
}) 
.catch(function(v) {

});
```




### Campos adicionais
* **CAgetData** - Recebe valor de um capo adicional
```javascript
data = {
	item: "os", //Ex.: os
	item_id: 0, // ID do item 
	ca_id: 0, // ID do campo adicional
	secao: "", // Se for relacionado a seções ('builder','projeto','...')
	secao_id: 0
	}
 netoffice.CAgetData(data) 
.then(function(v) {
    console.log(v);    
}) 
.catch(function(v) {

});
```

* **CAsaveData** - Insere dados de um campo adicional
```javascript
data = {
	item: "os", //Ex.: os
	item_id: 0, // ID do item 
	ca_id: 0, // ID do campo adicional
	secao: "", // Se for relacionado a seções ('builder','projeto','...')
	secao_id: 0,
	valor: "FOO"
	}
 netoffice.CAsaveData(data) 
.then(function(v) {
    console.log(v);    
}) 
.catch(function(v) {

});
```

* **CAfindDataByTitle** - Recebe valor de um capo adicional
```javascript
data = {
	q: "foo", (Imporatnte: esta busca utiliza Linguagem Natural para identificar os campos, no cadastro do campo adicionais otiluze os sinônimos)
	item: "os", //Ex.: os
	item_id: 0, // ID do item 
	secao: "", // Se for relacionado a seções (opcional)
	secao_id: 0 (opcional),
	nl: true //Linguagem Natural
	}
 netoffice.CAfindDataByTitle(data) 
.then(function(v) {
    console.log(v);    
}) 
.catch(function(v) {

});
```


### Usuários
* **getUser** - Recebe dados do usuário logado

```javascript
netoffice.getUser()
.then(function(v) { 
    console.log(v); 
  })
.catch(function(v) {

});

```

* **getUserbyId** - Recebe dados do usuário através do ID

```javascript
netoffice.getUserbyId(id)
.then(function(v) { 
    console.log(v); 
  })
.catch(function(v) {

});

```
* **getUserbyLogin** - Recebe dados do usuário através do Login

```javascript
netoffice.getUserbyLogin(login)
.then(function(v) { 
    console.log(v); 
  })
.catch(function(v) {

});

```


### Clientes
* **getData** - Recebe dados de **clientes**
```javascript
var item = 'clientes'; //ex.
var id_item = 999;
netoffice.getData(item,id_item) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


### Grupos de trabalho (projetos/equipes)
* **getGroups** - Recebe dados de **projetos/equipes**
```javascript
data = {
	item_id: "", //obrigatório
	status: "", //filtro
	titulo: "", //filtro
	cliente_id: "" //filtro
};

netoffice.getGroups(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **isParticipantGroup** - Valida se um usuário é participante do grupo **projetos/equipes**
```javascript

netoffice.isParticipantGroup(group_id,participant_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


### Tools

* **NetOfficeRequest** - Método para chamadas HTTP
```javascript
data = {
	method: "POST", //or "GET"
	type: "JSON", //default
	post_data: "FORM" // or "JSON"
	url: "http://site.com/?foo=bar",
	headers: {
	    "token":"324235",
	    "user":"email@email"
	    },
	body: {"idteste":"2345"}
    }
netoffice.NetOfficeRequest(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


## Interface


* **listTickets** - Exibe lista de tickets
```javascript
netoffice.listTickets(params) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```



```javascript
netoffice.reloadTicket(NetofficeJSTicketData.id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **MenuToggle** - Recolhe o menu lateral
```javascript
netoffice.MenuToggle() 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```
Ou
```javascript
netoffice.emit("NOtoggleMenu",{});
```

* **AjaxModal** - Janela modal com conteúdo ajax
```javascript
AjaxModal('<url>',{});
```


# Builder Widgets

