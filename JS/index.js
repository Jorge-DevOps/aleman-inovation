let bandera = true;
function menu() {
  var element = document.getElementById("menu");
  bandera = !bandera;
  bandera ? element.classList.add("menusvisible")
    : element.classList.remove("menusvisible");
}
function menu_movil() {
  var element = document.getElementById("menu-movil");
  var element1 = document.getElementById("btnMenu");
  bandera = !bandera;
  
  bandera ? element.classList.add("menusvisible")
    : element.classList.remove("menusvisible");
  
    bandera ? element1.classList.add("correrBtn")
    : element1.classList.remove("correrBtn");
}
