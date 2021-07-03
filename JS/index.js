let bandera = true;
function menu() {
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
function menu_movil() {
  var element = document.getElementById("menu-movil");
  var element1 = document.getElementById("btnMenu");
  bandera = bandera
  if (bandera == true) {
    element.classList.add("menusvisible");
    element1.classList.add("correrBtn");
    
    bandera = false;
  } else {
    element.classList.remove("menusvisible");
    element1.classList.remove("correrBtn");

    bandera = true;
  }
}

