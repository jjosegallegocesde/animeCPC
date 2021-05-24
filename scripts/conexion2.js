let url="http://localhost/apicpc/public/usuarios/new";

let llave1="nombre=juan";
let llave2="correo=pruebita.com";
let llave3="password=admin123";


let parametros={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1+"&"+llave2+"&"+llave3
}

fetch(url,parametros)
.then(respuesta=>respuesta.json())
.then(datos=>console.log(datos));