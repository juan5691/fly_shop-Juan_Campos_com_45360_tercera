/* ALUMNO JUAN CAMPOS CURSO JAVASCRIPT COMISION 45360, 
<-------TERCERA ENTREGA------>
✓ Codificar funciones de procesos esenciales y notificación de resultados
por HTML, añadiendo interacción alsimulador.
✓ Ampliar y refinar el flujo de trabajo del script en términos de captura de
eventos, procesamiento del simulador y notificación de resultados en forma de
salidas por HTML, modificando el DOM.
✓ Definir eventos a manejar y su función de respuesta.
✓ Modificar el DOM, ya sea para definir elementos al cargar la página o para
realizar salidas de un procesamiento.
✓ Almacenar datos (clave-valor) en el Storage y recuperarlos

/* EL PROYECTO SE TRATA DE UN "FLY SHOP ONLINE", VENTA DE EQUIPOS DE PESCA CON MOSCA */
// PENDIENTE PARA EL PROYECTO FINAL TABAJAR EL CARRITO CON LOCAL STORAGE Y MOSTRARLO EN ARCHIVO
// DISTINTO DEL HTML

// ARRAY DE OBJETOS ARTICULO
let productosCarrito = [];

function agregarCarrito(e){
 console.log ("Se hizo click", e.target);

let hijo = e.target;
let padre = hijo.parentNode;
let abuelo = padre.parentNode;

let nombre = padre.querySelector("h5").textContent;
let precio = padre.querySelector("span").textContent;
let imagen = abuelo.querySelector("img").src;


let articulo = {
    nombre : nombre,
    precio : precio,
    imagen : imagen,
    cantidad : 1
  
};
// SE PUSHEA AL ARRAY CUANDO SE HACE CLICK

  productosCarrito.push(articulo);
 // console.log(productosCarrito)

  // SE GUARDA EN LOCALSTORAGE

let articuloJson = JSON.stringify(productosCarrito); 
localStorage.setItem("carrito" , articuloJson); 

 // SE RECUPERA CARRITO DE LOCALSTORAGE Y SE PARSEA EL ARCHIVO JSON A ARRAY

let recuperarCarrito = localStorage.getItem("carrito");
recuperarCarrito = JSON.parse(recuperarCarrito);

// SE RECORRE EL ARRAY Y SE RENDERIZAN LOS OBJETOS RECUPERADOS

for (carrito of recuperarCarrito){  
    let fila = document.createElement("tr");
    fila.innerHTML = ` <td><img src="${carrito.imagen }" class="img-thumbnail" width ="80" height ="80"></td> 
                       <td>${carrito.nombre }</td>
                        <td>${carrito.cantidad }</td>
                        <td>${carrito.precio }</td>
                        <td><button type="button" class="btn btn-outline-success eliminar">Elimnar</button></td>
                        
    `; 

    // SE CAPTURA EL NODO Y SE INSERTA EL CONTENIDO

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    // SE CAPTURA BOTON ELIMINAR SE GENERA EL EVENTO
    let botonEliminar = document.querySelectorAll(".eliminar");
        for (let boton of botonEliminar){
            boton.addEventListener("click" , eliminarArticulo );
   
  } 
}
}  
 
 // BOTON ELIMINAR PENDIENTE HACER REMOVE() DE LOCAL STORAGE

 function eliminarArticulo(e){
    e.target.parentNode.parentNode.remove();
 }  
  
  //SE TRAE EL BOTON SE GENERA ENTO CLICK AGREGA AL CARRITO 
  let botonComprar = document.querySelectorAll (".botonComprar");
  //SE RECORRE EL ARRAY DE BOTONES
  for (let boton of botonComprar){
    boton.addEventListener ("click" , agregarCarrito);
  }



