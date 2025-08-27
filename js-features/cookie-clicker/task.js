// Задание 2
const cookie = document.getElementById('cookie')
const clicker_counter = document.getElementById('clicker__counter')

cookie.onclick = function () {
    clicker_counter.textContent = Number(clicker_counter.textContent) +1 
    if (cookie.width == 200) {
        cookie.width = 150
    }
    else {
        cookie.width = 200
    }
}

