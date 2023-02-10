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


// <----REGISTRO DE USUARIOS----> 

// FUNCION MANEJADORA DE EVENTO PARA RERGISTRO DE USUARIOS"EVENT HANDLER"

//SE DECLARA ARRAY VACIO
let arregloUsuarios = [];

function set_data(){
    
    let nombre = document.getElementById("nombre"); //CAPTURAR NOMBRE Y PASSWORD
    let clave = document.getElementById("pass");


    let usuario = {nombre:nombre.value , password:clave.value}; //SE PUSHEA AL OBJETO ARRAY DE OBJETOS LITERAL
    arregloUsuarios.push(usuario);

    let usuarioJSON = JSON.stringify(arregloUsuarios);      //PASAR A JSON, GUARDAR EN LOCALSTORAGE
    localStorage.setItem("arreglo_usuarios" , usuarioJSON);

    let recuperarUsuarios = localStorage.getItem("arreglo_usuarios");  //SE RECUPERA DE LOCAL STORAGE
    console.log( recuperarUsuarios );
  
}

// FUNCION MANEJADORA DE EVENTO PARA INGRESO DE USUARIOS"EVENT HANDLER"

function login_usuario(){

    let nombre= document.getElementById("nombre"); //CAPTURAR NOMBRE Y PASSWORD
    let clave = document.getElementById("pass");

    let recuperarUsuarios = localStorage.getItem("arreglo_usuarios"); //SE RECUPERA DE LOCAL STORAGE
    recuperarUsuarios = JSON.parse(recuperarUsuarios);

    console.log(recuperarUsuarios);

//SE RECORRE EL ARREGLO PARA VER SI EL USUARIO ESTA REGISTRADO    
    for( let usuario of recuperarUsuarios){
        if( nombre.value == usuario.nombre && clave.value == usuario.password){
            let noEncontrado = document.getElementById("noEncontrado");
            noEncontrado.innerHTML ="Bienvenido!"
            noEncontrado.addEventListener("mousemove", function (){
                location.href = "index.html";
            })
        }
        else{
            let noEncontrado = document.getElementById("noEncontrado");
            noEncontrado.innerHTML ="Usuario no encontrado"
  
        }
    }

}


let btn8_registro = document.getElementById("btn_registro");
btn_registro.addEventListener("click" , set_data);


let btn_login = document.getElementById("btn_login");
btn_login.addEventListener("click" , login_usuario);




