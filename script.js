// function toggleMobileMenu() {
//   var menu = document.querySelector('.mobile-menu')
//   menu.classList.toggle('active')
// }

// Mostrar el menú cuando el mouse entra en el botón en dispositivos móviles
document
  .querySelector('.open-menu-btn')
  .addEventListener('mouseenter', function () {
    var menu = document.querySelector('.mobile-menu')
    menu.classList.add('active')
  })

// Ocultar el menú cuando el mouse sale del botón en dispositivos móviles
document
  .querySelector('.mobile-menu')
  .addEventListener('mouseleave', function () {
    var menu = document.querySelector('.mobile-menu')
    menu.classList.remove('active')
  })
