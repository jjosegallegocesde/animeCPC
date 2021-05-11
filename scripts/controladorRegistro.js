//Se referencias las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuario");
let correo=document.getElementById("correoUsuario");
let password1=document.getElementById("passwordUsuario");


//Recibir el evento de clic en mi boton
boton.addEventListener("click",recibirDatosFormulario);

//Se crea función para recibir información
function recibirDatosFormulario(){

    let nombreValor=nombre.value;
    let correoValor=correo.value;
    let password1Valor=password1.value;

    validarCaminos(nombreValor,correoValor,password1Valor);
   
}

function validarCaminos(nombreValor,correoValor,password1Valor){

    if(nombreValor=="" && correoValor== "" && password1Valor==""){
       

    }else if(correoValor== "" && password1Valor==""){
        

    }else if(nombreValor=="" && password1Valor==""){

    }else if(nombreValor=="" && correoValor== "" && password1Valor==""){

    }else if(nombreValor=="" && correoValor== "" && password1Valor==""){

    }else if(nombreValor=="" && correoValor== "" && password1Valor==""){

    }else if(nombreValor=="" && correoValor== "" && password1Valor==""){

    }else{

    }

}





