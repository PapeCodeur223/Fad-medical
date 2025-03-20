// Animation au survol des cartes
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(0px)';
      card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
});