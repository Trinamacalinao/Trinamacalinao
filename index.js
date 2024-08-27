document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    // Set the first card as expanded initially
    if (cards.length > 0) {
        cards[0].classList.add('expanded');
    }

    // Add hover event listeners to each card
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Remove 'expanded' class from all cards
            cards.forEach(c => c.classList.remove('expanded'));
            // Add 'expanded' class to the hovered card
            this.classList.add('expanded');
        });
    });
});

