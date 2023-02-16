
// ARRAY DE OBJETOS ARTICULO
let productosCarrito = [];

function agregarCarrito(e){
 console.log ("Se hizo click", e.target);

let hijo = e.target;
let padre = hijo.parentNode;
let abuelo = padre.parentNode;

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

for (carrito of recuperarCarrito){  
  
    fila.innerHTML = ` <td><img src="${carrito.imagen }" class="img-thumbnail" width ="80" height ="80"></td> 
                       <td>${carrito.nombre }</td>
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
    e.target.parentNode.parentNode.remove();
 }  
  
  //SE TRAE EL BOTON SE GENERA ENTO CLICK AGREGA AL CARRITO 
  let botonComprar = document.querySelectorAll (".botonComprar");
  //SE RECORRE EL ARRAY DE BOTONES
  for (let boton of botonComprar){
    boton.addEventListener ("click" , agregarCarrito);
  }