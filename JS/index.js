let bandera = true;
function menu() {
  console.log("hola");

  var element = document.getElementById("menu");
  console.log(bandera);

  if (bandera == true) {
    document.getElementById("menu");
    element.classList.add("menuvisible");
    bandera = false;
  } else {
    document.getElementById("menu");
    element.classList.remove("menuvisible");
    bandera = true;
  }
}
