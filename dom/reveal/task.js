function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight
    );
}

function checkReveal() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('reveal_active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    checkReveal();
    window.addEventListener('scroll', checkReveal);
});