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

// trabajo pendiente para proyecto final GUARDAR EN LOCAL STORAGE

mostrarCarrito(articulo);

}

function mostrarCarrito(articulo){
    let fila = document.createElement("tr");
    fila.innerHTML = ` <td><img src="${articulo.imagen }" class="img-thumbnail" width ="80" height ="80"></td> 
                       <td>${articulo.nombre }</td>
                        <td>${articulo.cantidad }</td>
                        <td>${articulo.precio }</td>
                        <td><button type="button" class="btn btn-outline-success eliminar">Elimnar</button></td>
                        
    `; 

    let tabla = document.getElementById("tbody");
    tabla.append(fila);
    
    let botonEliminar = document.querySelectorAll(".eliminar");
    
    for (let boton of botonEliminar){
            boton.addEventListener("click" , eliminarArticulo );

    }
}   
  
 function eliminarArticulo(e){
    e.target.parentNode.parentNode.remove();
 } 
  


  //SE TRAE EL BOTON SE GENERA ENTO CLICK AGREGA AL CARRITO 
  let botonComprar = document.querySelectorAll (".botonComprar");
  //SE RECORRE EL ARRAY DE BOTONES
  for (let boton of botonComprar){
    boton.addEventListener ("click" , agregarCarrito);
  }



