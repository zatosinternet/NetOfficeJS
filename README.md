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
* **CAgetData** - Recebe dados de um ticket

* **CAsaveData** - Recebe dados de um ticket

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

* **reloadTicket** - Recebe dados de um ticket

