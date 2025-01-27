// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function print(parametro){
    console.log(parametro)
}

let listaAmigos = [];
let nombresAmigos = "";
let agregandoAmigos = true;
let cantidad = 1;
let numeroAmigo = 1;

//console.log(listaAmigos);   

function agregarAmigo() {
    // Debe leer lo que está en pantalla y guardarlo

    // j
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    // Agrega amigos a lista 
    if (nombreAmigo !== "")  {
        // Agegar amigo a la lista
        listaAmigos.push(nombreAmigo);
        // Agregar al nombre a la lista visible
        nombresAmigos = nombresAmigos + "\n" + numeroAmigo + ". " + nombreAmigo;
        //limpiar caja de texto
        document.getElementById('amigo').value = "";
        numeroAmigo++
        actualizarLista(nombresAmigos);
    }
}

function sortearAmigo(params) {
    // limpiar el input
    // Sortear amigo
    let a=1;
    // Inabilitar el boton agregar amigo
    // Mostrar en pantalla el nombre sorteado
    // Cambiar texto del boton a "Nuevo Sorteo"
    // habilitar botón agregar amigo
    // Cambiar el texto del botón Sorteo
    //limpiar lista
}

function cambiarBotones(){
    // Esta función asignará texto a los botones y los inabilitara
    if (agregandoAmigos==false){ 
    a=1   
    }
}

function actualizarLista(lista){
    document.getElementById("listaAmigos").innerText = lista;
}
