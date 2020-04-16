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


