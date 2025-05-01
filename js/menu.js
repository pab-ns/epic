const btn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

btn.addEventListener("click", navToggle)

// Toogle Mobile Menu
function navToggle (){
  btn.classList.toggle("open")
  menu.classList.toggle("flex")
  menu.classList.toggle("hidden")
}


// dropdown menu
const toggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
const arrow = document.getElementById("arrow-icon");
  
  toggle.addEventListener("click", navToggledropDown)

  // Toogle Mobile Menu
  function navToggledropDown (){
  dropdownMenu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-0");
  arrow.classList.toggle("-rotate-90");
  }
