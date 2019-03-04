


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

