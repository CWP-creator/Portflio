// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    cardsContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      cardsContainer.classList.add('active');
      startX = e.pageX - cardsContainer.offsetLeft;
      scrollLeft = cardsContainer.scrollLeft;
    });
  
    cardsContainer.addEventListener('mouseleave', () => {
      isDown = false;
      cardsContainer.classList.remove('active');
    });
  
    cardsContainer.addEventListener('mouseup', () => {
      isDown = false;
      cardsContainer.classList.remove('active');
    });
  
    cardsContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - cardsContainer.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      cardsContainer.scrollLeft = scrollLeft - walk;
    });
  });
  
  