# NetOfficeJS API

## API

### `netoffice = new NetOffice();`

### Recebendo dados de usuários


* **getUser** - Recebe dados do usuário logado

```javascript
netoffice.getUser()
.then(function(v) { 
    console.log(v); 
  })
.catch(function(v) {

});

```


* **getData** - Recebe dados de **clientes**
```javascript
netoffice.getData('<item>',<id_item>) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```


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

* Campos adicionais
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


* Tickets
* **getTicket** - Recebe dados de um ticket
```javascript
netoffice.getTicket(<ID_TICKET>) 
.then(function(v) {
      console.log(v);    
}) 
.catch(function(v) {

});
```
Exemplo de resultado:
```

```

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
