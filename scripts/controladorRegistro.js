//Se referencias las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuario");
let correo=document.getElementById("correoUsuario");
let password=document.getElementById("passwordUsuario");


//Recibir el evento de clic en mi boton
boton.addEventListener("click",recibirDatosFormulario);

//Se crea función para recibir información
function recibirDatosFormulario(){

    let nombreValor=nombre.value;
    let correoValor=correo.value;
    let passwordValor=password.value;

    validarCaminos(nombreValor,correoValor,passwordValor);
   
}

function validarCaminos(nombreValor,correoValor,passwordValor){

    if(nombreValor=="" && correoValor== "" && passwordValor==""){
        
        nombre.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        password.classList.add("is-invalid");
       

    }else if(nombreValor=="" && correoValor==""){

        nombre.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        password.classList.remove("is-invalid");
        
    }else if(nombreValor=="" && passwordValor==""){

        nombre.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        password.classList.add("is-invalid");

    }else if(correoValor== "" && passwordValor==""){

        nombre.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        password.classList.add("is-invalid");

    }else if(nombreValor==""){

        nombre.classList.add("is-invalid");
        correo.classList.remove("is-invalid");
        password.classList.remove("is-invalid");

    }else if(correoValor== ""){

        nombre.classList.remove("is-invalid");
        correo.classList.add("is-invalid");
        password.classList.remove("is-invalid");

    }else if(passwordValor==""){

        nombre.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        password.classList.add("is-invalid");

    }else{

        nombre.classList.remove("is-invalid");
        correo.classList.remove("is-invalid");
        password.classList.remove("is-invalid");
    }

}






