# NetOfficeJS API

## API

### `netoffice = new NetOffice();`


* **NetOfficeRequest** - Método para chamadas HTTP
```javascript
data = {
	method: "POST", //or "GET"
	type: "JSON", //default
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





### Tickets


* **addTicket** - Cria um ticket
```javascript
data = {
	usuario: "", //Usuário NetOffice
	operador: "backlog",
	assunto: "",
	descricao: "",
	ref_abertura: "",
	tags: "Tag 1, Tag 2",
	emails_os: "",
	categoria: "0",//ID Categoria
	relacao_id: "",//ID Grupo de Trabalho
	seguidores: "user1@empresa.com.br,user2@empresa.com.br",
	data_desejada: "",//AAAA-MM-DD HH:ii:ss
	cliente_id: "",//ID do cliente
	template: "", //ID do template
	seq_responsaveis: "user1@empresa.com.br,user2@empresa.com.br",
	checklist: "Task 1,Task 2",
	campos_adicionais: {},
	canal_abertura: "",
	canal_abertura_id: "",
	esforco: "01" //Quantidade de horas
	
}
netoffice.addTicket(data) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


* **getTicket** - Recebe dados de um ticket
```javascript
netoffice.getTicket(<ID_TICKET>) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
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


### Builder

* **getSecao** - Recebe estrutura de uma seção do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0; //Opcional, esta variável já é definida na view da seção
netoffice.getSecao(no_builder_secao_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

* **getSecaoData** - Recebe dados de seção do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0; //Opcional, esta variável já é definida na view da seção
netoffice.getSecaoData(no_builder_secao_id) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```

#### Builder UI

* **getSecaoHTML** - Recebe estrutura HTML do **NetOffice Builder**
```javascript
var no_builder_secao_id = 0; 
netoffice.getSecaoHTML(no_builder_secao_id) 
.then(function(v) {
      //Retorno HTML - v.html   
}) 
.catch(function(v) {

});
```

* **getSecaoAnexos** - Recebe estrutura HTML de anexos
```javascript
var no_builder_secao_id = 0; 
netoffice.getSecaoHTML(no_builder_secao_id) 
.then(function(v) {
      //Retorno HTML - v.html   
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



## Interface


* **reloadTicket** - Atualiza ModalView do ticket que está sendo exibido
```javascript
netoffice.reloadTicket() 
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


* **AjaxModal** - Janela modal com conteúdo ajax
```javascript
AjaxModal('<url>',{});
```



