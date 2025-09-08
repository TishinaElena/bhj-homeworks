document.addEventListener('DOMContentLoaded', function() {
    initRotator();
});

function initRotator() {
    const cases = Array.from(document.querySelectorAll('.rotator__case'));
    let currentIndex = 0;
    setInterval(() => {
        cases.forEach(caseElement => {
            caseElement.classList.remove('rotator__case_active');
        });
               
        cases[currentIndex].classList.add('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
    }, 1000);
}