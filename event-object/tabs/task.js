const tabs = Array.from(document.querySelectorAll('.tab'))
const tabcontents = Array.from(document.querySelectorAll('.tab__content'))

tabs.forEach(item => {
    item.addEventListener('click', function(event) {
        const prev_active = document.querySelector('.tab_active')
        prev_active.classList.remove('tab_active')
        item.classList.add('tab_active')
        let ind = tabs.indexOf(item)
        const prev_active_content = document.querySelector('.tab__content_active')
        prev_active_content.classList.remove('tab__content_active')
        tabcontents[ind].classList.add('tab__content_active')
    })
    
});