## NetOffice Node Function

***Exemplo de rotas***	
	
URL: https://broker.n.wop.net.br:3095/route/1504903cf70369b8145917e0c752e46f/index

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
