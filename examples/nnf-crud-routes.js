## NetOffice Node Function

***Exemplo de rotas***	
```javascript	
var ROUTE = req.params.route;

switch(ROUTE) {
  case add:
    return "Add Code";
    break;
  case edit:
    return "Edit Code";
    break;
  default:
    return "Hello!";
	
}



```
