# Test 

Función que obtiene recibe fecha, monto en UF y que retorna valor en CLP del día ingresado.
***
## Instalacción 
Instalamos dependencias

```npm install```

Ejecutamos serverless

```serverless offline``` or ```sls offline```
***
## Servicio Lamda POST /UFCLP
#### URL: https://ovznkf7sk3.execute-api.us-east-1.amazonaws.com/UFCLP
***
## Como se usa?

POST → http://localhost:3000/UFCLP

### Datos de ingreso
El servicio recibirá la información de la nave a través de un HTTP POST en
el siguiente formato:

####fecha: formato "DD-MM-YYYY"
####valor_uf : formato numerico solo acepta punto como decimal

```JSON
{
  "fecha": "25-03-2022",
  "valor_uf": 45.9
}
```
La respuesta por su parte debe tener la siguiente forma:
```JSON
{
  "success": true,
  "CLP": 1455459
}
```




