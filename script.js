


function login(){

    var usuario= document.getElementById("txtUsuario").value;
    var contrasena= document.getElementById("txtContra").value;

    if(usuario=="admin" && contrasena=="admin")
    {
        location.href ="menu.html";
    }
    else{
        alert("Datos incorrectos")
        document.getElementById("txtUsuario").value="";
        document.getElementById("txtContra").value="";
        document.getElementById("txtUsuario").focus();
    }
}

var hoy= new Date();

var fecha= hoy.getDate() + '-'+ (hoy.getMonth()+1)+'-'+hoy.getFullYear();

var hora= hoy.getHours();

var fechaHora=fecha +' // '+ hora +'hs';

function cargarFecha(){
document.getElementById("txtFecha").value=fecha;
}


function guardar(){
   
    var fec = document.getElementById("txtFecha").value;
    var desc = document.getElementById("txtRegistro").value;

    var fila="<tr><td>"+fec+"</td><td>"+desc+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);

    document.getElementById("txtRegistro").value="";
    document.getElementById("txtFecha").value=fechaHora;
}

setTimeout(function(){
    window.location.reload(1);
 }, 20000);