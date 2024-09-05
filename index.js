document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.classList.add('collapsed');
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
  this.classList.toggle('collapsed');
});
