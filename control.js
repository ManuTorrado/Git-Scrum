let pass = document.getElementById("input-pass");
let usuario = document.getElementById("input-name");
let formulario = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validar); 
});


function validar(evento) {
  evento.preventDefault();
  let txtusuario = usuario.value;
  if(txtusuario.length == 0) {
    alert('No puedes dejar el usuario vacio!');
    return;
  }

  if(txtusuario.indexOf('@') == -1){


alert('Falta el arroba en el usuario');
return;
  }

  let clave = pass.value;
  if (clave.length == 0) {
    alert('La clave esta vacia');
    return;
  }

  
  alert("Enviado con exito!");
  this.submit();
}