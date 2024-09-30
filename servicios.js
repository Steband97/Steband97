window.addEventListener('scroll', function() {
    var card = document.querySelector('.sticky-top');
    if (window.scrollY > 100) {  // Puedes ajustar este valor
      card.style.top = '30px';   // Define cuánto margen quieres al hacer scroll
    } else {
      card.style.top = '0';      // Restablece el margen cuando no haya scroll
    }
  });
  
