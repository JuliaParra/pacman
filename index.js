document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const ghost = document.getElementById('ghost');
    const cherry = document.getElementById('cherry');
    const scoreDisplay = document.getElementById('score');
    const gameOverDisplay = document.getElementById('game-over');
    let score = 0;
    let ghostCount = 0;
    let isGameOver = false;
    let isPacmanMoving = false;
    const container = document.getElementById('pacman-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const minY = 120;

    function getRandomPosition() {
        const maxX = containerWidth - 80;
        const maxY = containerHeight - 80;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * (maxY - minY)) + minY,
        };
    }

    function moveGhost() {
        const { x, y } = getRandomPosition();
        ghost.style.left = `${x}px`;
        ghost.style.top = `${y}px`;
    }

    function moveCherry() {
        const { x, y } = getRandomPosition();
        cherry.style.left = `${x}px`;
        cherry.style.top = `${y}px`;
    }

    function resetPacmanPosition() {
        pacman.style.left = '47%';
        pacman.style.top = '47%';
        pacman.style.transform = 'translate(-47%, -47%)';
    }

    pacman.addEventListener('click', () => {
        if (!isGameOver && !isPacmanMoving && ghost.style.display === 'block') {
            isPacmanMoving = true;
            pacman.style.transition = 'left 1s linear, top 1s linear';
            pacman.style.left = `${ghost.offsetLeft}px`;
            pacman.style.top = `${ghost.offsetTop}px`;

            setTimeout(() => {
                eatGhost();
                resetPacmanPosition();
                isPacmanMoving = false;
                ghost.style.display = 'none';
            }, 1000);
        }
    });

    cherry.addEventListener('click', () => {
        if (!isGameOver) {
            score += 500;
            updateScore();
            cherry.style.display = 'none';
            ghost.style.display = 'block';
            resetGhostPosition();
        }
    });

    function resetGhostPosition() {
        moveGhost();
        ghost.style.display = 'block';
    }

    function eatGhost() {
        score += 100;
        updateScore();
        ghostCount++;

        if (ghostCount % 3 === 0) {
            showCherry();
        } else {
            resetGhostPosition();
        }

        if (score >= 5000) {
            gameOver();
        }
    }

    function showCherry() {
        cherry.style.display = 'block';
        ghost.style.display = 'none';
        moveCherry();
    }

   function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
    scoreDisplay.classList.add('score-update');
    setTimeout(() => {
        scoreDisplay.classList.remove('score-update');
    }, 300);
}


    function gameOver() {
        isGameOver = true;
        gameOverDisplay.style.display = 'block';
        ghost.style.display = 'none';
        cherry.style.display = 'none';
        pacman.style.display = 'none';
        scoreDisplay.textContent = `Final Score: ${score}`;
    }

    function increaseDifficulty() {
        ghost.style.transition = 'all 0.8s linear';
    }

    setInterval(() => {
        if (!isGameOver && cherry.style.display !== 'block' && ghost.style.display !== 'block') {
            resetGhostPosition();
            increaseDifficulty();
        }
    }, 3000);

    resetPacmanPosition();
});
