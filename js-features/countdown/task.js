// Задание 1
const timer = function(){
    const timerTime = document.getElementById('timer');
    timerTime.textContent -= 1;
    
    if (timerTime.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalID); 
    }
}

const intervalID = setInterval(timer, 1000);

