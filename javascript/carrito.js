
// ARRAY DE OBJETOS ARTICULO
let productosCarrito = [];

function agregarCarrito(e){
 //console.log ("Se hizo click", e.target);

let hijo = e.target;
let padre = hijo.parentNode;
let abuelo = padre.parentNode;
console.log(padre);

let nombre = padre.querySelector("h5").textContent;
let precio = Number(padre.querySelector("span").textContent) ;
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

//console.log(recuperarCarrito);


//FUNCION PARA SUMAR TOTAL DEL CARRITO

 function total (acu , producto){
  acu = acu + producto.precio;
  return acu;
  }
  let totalCarrito = recuperarCarrito.reduce(total , 0);

  let sumaTotal = document.getElementById("total");
  sumaTotal.innerText = "$"+totalCarrito;

  //console.log(totalCarrito);


//SE CREA UNA FILA VACIA PARA QUE CUANDO SE RECORRA EL ARRAY NO DUPLIQUE EL RENDER
let fila = document.createElement("tr");
fila.innerHTML="";


// SE RECORRE EL ARRAY Y SE RENDERIZAN LOS OBJETOS RECUPERADOS EN LA FILA QUE ESTA VIA

for (let carrito of recuperarCarrito){  
  
    fila.innerHTML = ` <td><img src="${carrito.imagen }" class="img-thumbnail" width ="80" height ="80"></td> 
                       <td><span>${carrito.nombre }</span></td>
                        <td>${carrito.cantidad }</td>
                        <td>$${carrito.precio }</td>
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
  let equipo = e.target.parentNode.parentNode;
 
 //SE IDENTIFICA EL NOMBRE DEL EQUIPO QUE SE ELIMINO DEL CARRITO
 nombreEquipo = equipo.querySelector("span").textContent;
 console.log(nombreEquipo);

 // SE RECUPERA CARRITO DE LOCALSTORAGE SE PARSEA Y SE HACE UN FIND() CON EL NOMBRE DEL EQUIPO IDENTIFICADO
let recuperarCarrito = localStorage.getItem("carrito");
recuperarCarrito = JSON.parse(recuperarCarrito);
console.log(recuperarCarrito);

function buscarEquipo(equipo){
return equipo.nombre == nombreEquipo ;
}

let equipoEncontrado = recuperarCarrito.find(buscarEquipo);
let indice = recuperarCarrito.indexOf(equipoEncontrado);
//console.log(indice);
recuperarCarrito.splice(indice , 1);
//console.log(recuperarCarrito);
//SE SOBREESCRIBE LOCALSTORAGE, ---NO PUDE ELIMINAR CON localStorage.removeItem()-- 
let nuevoCarrito = JSON.stringify(recuperarCarrito);
localStorage.setItem("carrito" , nuevoCarrito);

//VUELVO A HACER LO MISMO PARA EL ARRAY productos[] PARA QUE NO EMPIECE DE NUEVO EL CICLO
//AL VOLVER A CLICKEAR UN PRODUCTO SIN ANTES REFRESCAR LA PAGINA, NO ME LO VUELVA A MANDAR AL LOCALSTORAGE  

function ubicarEquipo (equipoUbicado){
return equipoUbicado.nombre == nombreEquipo ;
}
let equipoUbicacion = productosCarrito.find(ubicarEquipo);
//console.log(equipoUbicacion);
let indiceEquipo = productosCarrito.indexOf(equipoUbicacion);
//console.log(indiceEquipo);
productosCarrito.splice(indiceEquipo , 1)

//let eliminar = JSON.stringify(equipoEncontrado);
//localStorage.removeItem("carrito" , );
//FUNCION PARA SUMAR TOTAL DEL CARRITO

//SE VUELVE A CALCULAR EL TOTAL DEL CARRITO SUANDO SE ELIMINAN ARTICULOS
function total (acu , producto){
  acu = acu + producto.precio;
  return acu;
  }
  let totalCarrito = recuperarCarrito.reduce(total , 0);

  let sumaTotal = document.getElementById("total");
  sumaTotal.innerText = "$"+totalCarrito;

//SE ELIMINA DEL HTML
e.target.parentNode.parentNode.remove();
 
 }  


  
  //SE TRAE EL BOTON SE GENERA ENTO CLICK AGREGA AL CARRITO 
  let botonComprar = document.querySelectorAll (".botonComprar");
  //SE RECORRE EL ARRAY DE BOTONES
  for (let boton of botonComprar){
    boton.addEventListener ("click" , agregarCarrito);
    
  }

