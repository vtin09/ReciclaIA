document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Add mouse move parallax effect
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.querySelector('.card-inner').style.transform = `translateY(-10px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
        });

        // Reset position when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-inner').style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
});