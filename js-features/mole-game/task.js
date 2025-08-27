// Задание 3

let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        // Проверяем, есть ли в лунке крот
        if (hole.className.includes('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }
        
        // Проверяем условия окончания игры
        checkGameStatus();
    };
}

function checkGameStatus() {
    if (dead === 10) {
        alert('Победа!');
        resetGame();
    } else if (lost === 5) {
        alert('Вы проиграли!');
        resetGame();
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateScore();
}

function updateScore() {
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

updateScore();