const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked on ${card.textContent}!`);
  });
});
