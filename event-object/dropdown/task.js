const dropdown = document.querySelector('.dropdown');
const dropdown__value = dropdown.querySelector('.dropdown__value');
const dropdown__list = dropdown.querySelector('.dropdown__list');
const dropdown__items = Array.from(dropdown.querySelectorAll('.dropdown__item'));

dropdown__value.addEventListener('click', function(event) {
    dropdown__list.classList.toggle('dropdown__list_active');
});

dropdown__items.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
                
        const linkText = this.querySelector('.dropdown__link').textContent;
        
        dropdown__value.textContent = linkText;
        dropdown__list.classList.remove('dropdown__list_active');
    });
});


document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        dropdown__list.classList.remove('dropdown__list_active');
    }
});


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dropdown__value')) {
         const allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(drop => {
            if (drop !== dropdown) {
                const list = drop.querySelector('.dropdown__list');
                list.classList.remove('dropdown__list_active');
            }
        });
    }
});