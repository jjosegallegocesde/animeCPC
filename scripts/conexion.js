let busqueda="anime";
let url=`http://api.giphy.com/v1/gifs/search?api_key=fEAR9TrqgjatwcOtKAPuEkthH7dg1Z9k&q=${busqueda}`;


fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarDatos(datos));


function organizarDatos(datos){

    console.log(datos);
    console.log(datos.data);
    console.log(datos.data[0]);
    console.log(datos.data[0].images);
    console.log(datos.data[0].images.downsized_medium);
    console.log(datos.data[0].images.downsized_medium.url);

    let imagen1=document.getElementById("img1");
    let imagen2=document.getElementById("img2");
    let imagen3=document.getElementById("img3");
    let imagen4=document.getElementById("img4");
    let imagen5=document.getElementById("img5");
    let imagen6=document.getElementById("img6");
    let imagen7=document.getElementById("img7");
    let imagen8=document.getElementById("img8");
    let imagen9=document.getElementById("img9");
    let imagen10=document.getElementById("img10");

    imagen1.src=datos.data[0].images.downsized_medium.url;
    imagen2.src=datos.data[1].images.downsized_medium.url;
    imagen3.src=datos.data[2].images.downsized_medium.url;
    imagen4.src=datos.data[3].images.downsized_medium.url;
    imagen5.src=datos.data[4].images.downsized_medium.url;
    imagen6.src=datos.data[5].images.downsized_medium.url;
    imagen7.src=datos.data[10].images.downsized_medium.url;
    imagen8.src=datos.data[7].images.downsized_medium.url;
    imagen9.src=datos.data[8].images.downsized_medium.url;
    imagen10.src=datos.data[9].images.downsized_medium.url;
    



}