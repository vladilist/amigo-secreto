// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function print(parametro){
    console.log(parametro)
}


let listaAmigos = [];
let nombresAmigos = "";
let agregandoAmigos = true;


/*
Esta función agrega el nombre ingresado a la lista 
*/
function agregarAmigo() {
    // Debe leer lo que está en pantalla y guardarlo
    let nombreAmigo = document.getElementById('amigo').value;
    // Agrega amigos a lista 
    if (nombreAmigo !== "")  {
        // Agegar amigo a la lista
        listaAmigos.push(nombreAmigo);
        // Agregar al nombre a la lista visible
        nombresAmigos = nombresAmigos + "\n" + nombreAmigo;
        //limpiar caja de texto
        document.getElementById('amigo').value = "";
        actualizarLista(nombresAmigos);
    }
}
/*
Esta función sortea el nombre y reincia para nuevo sorteo
*/
function sortearAmigo() {
    if (agregandoAmigos==true & nombresAmigos !== ""){
        // limpiar el input
        textoAmigo = document.getElementById("amigo").innerHTML = "";
        agregandoAmigos = false;
        // Sortear amigo
        let numeroSorteado = Math.floor(Math.random()*listaAmigos.length);   
        // Mostrar en pantalla el nombre sorteado
        let amigoSorteado ="El amigo sorteado es: " + listaAmigos[numeroSorteado];
        document.getElementById("listaAmigos").innerText = amigoSorteado;
        // Cambiar texto del boton a "Nuevo Sorteo" y Inabilitar el boton agregar amigo
        cambiarBotones();
        agregandoAmigos = false;

    } else{
        //limpiar el cuadreo de texto
        document.getElementById("amigo").value = "";
        //limpiar el texto de la lista de amigos
        document.getElementById("listaAmigos").innerText = "";
        //habilitar el botón de agregar
        document.getElementById("botonAgregar").removeAttribute("disabled");
        agregandoAmigos = true;
        //cambiar texto al botón Nuevo juego
        cambiarBotones();
    }
}

/*
Esta función cambia el texto del botón sortear amigo y nuevo sorteo
*/
function cambiarBotones(){
    // Esta función asignará texto a los botones y los inabilitara
    if (agregandoAmigos==false){ 
        document.getElementById("botonAgregar").setAttribute("disabled", true);
        let botonSortear = document.getElementById("botonSortear");
        textoBotonSortear = botonSortear.lastChild; // El nodo de texto visible
        if (textoBotonSortear.nodeType === Node.TEXT_NODE) {
                textoBotonSortear.textContent = "Nuevo sorteo"; // Cambia el texto que se muestra
        }
    } else{
        let botonSortear =document.getElementById("botonSortear");
        textoBotonSortear = botonSortear.lastChild;
        if (textoBotonSortear.nodeType === Node.TEXT_NODE){
            textoBotonSortear.textContent = "Sortear amigo";
        }
        condicionesIniciales()
    }
}

/*
Está función actualiza la lista en pantalla
*/
function actualizarLista(lista){
    document.getElementById("listaAmigos").innerText = lista;
}

function condicionesIniciales(){
    // restablecer variables
    listaAmigos = [];
    nombresAmigos = "";
    agregandoAmigos = true;
    // Cambiar el texto del botón Sorteo
    restaurarHtml();
}

function restaurarHtml(){
    // limpiar entrada
    document.getElementById("amigo").innerHTML = "";
    //limpiar pantalla
    document.getElementById("listaAmigos").innerHTML = nombresAmigos;
    // habilitar botón agregar amigo
    document.getElementById("botonAgregar").removeAttribute("disabled");
    // Cambiar texto del botón sortear
    document.getElementById("botonSortear").setAttribute("aria-label", "Sortear amigo secreto");
}