// document.addEventListener('DOMContentLoaded', () => {
//     const pacman = document.getElementById('pacman');
//     const ghost = document.getElementById('ghost');
//     const cherry = document.getElementById('cherry');
//     const scoreDisplay = document.getElementById('score');
//     const gameOverDisplay = document.getElementById('game-over');

//     let score = 0;
//     let ghostCount = 0;
//     let isPacmanMoving = false;

//     // Evento para mover Pacman y comer fantasmas
//     pacman.addEventListener('click', () => {
//         if (!isPacmanMoving && ghost.style.display === 'block') {
//             isPacmanMoving = true; 

//             // Animación de movimiento hacia el fantasma 
//             pacman.style.transition = 'left 1s linear';
//             pacman.style.left = `${ghost.offsetLeft}px`;

//             // Simulación de "comer" el fantasma
//             setTimeout(() => {
//                 eatGhost();
                
//                 pacman.style.transition = 'left 1s linear';
//                 pacman.style.left = '0';
//                 isPacmanMoving = false; 
//                 ghost.style.display = 'none'; 
//             }, 1000);
//         }
//     });

//     cherry.addEventListener('click', () => {
//         console.log("Cereza comida");
//         score += 500;
//         updateScore();
//         cherry.style.display = 'none';
//     });

//     // Función para comer fantasmas
//     function eatGhost() {
        

//         score += 100;
//         updateScore();
//         ghostCount++;

//         // Mostrar cherry cada 3 fantasmas comidos
//         if (ghostCount % 3 === 0) {
//             showCherry();
//         }

        
//         if (score >= 5000) {
//             gameOver();
//         }
//     }

    
//     function showCherry() {
//         cherry.style.display = 'block';
//     }

   
//     function updateScore() {
//         scoreDisplay.textContent = `Score: ${score}`;
//     }

    
//     function gameOver() {
        
//         gameOverDisplay.style.display = 'block';
//     }

//     // Generar fantasmas cada 2 segundos
//     setInterval(() => {
//         ghost.style.display = 'block';
//     }, 2000);
// });


document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const ghost = document.getElementById('ghost');
    const cherry = document.getElementById('cherry');
    const scoreDisplay = document.getElementById('score');
    const gameOverDisplay = document.getElementById('game-over');

    let score = 0;
    let ghostCount = 0;
    let isPacmanMoving = false;

    // Evento para mover Pacman y comer fantasmas
    pacman.addEventListener('click', () => {
        if (!isPacmanMoving && ghost.style.display === 'block') {
            isPacmanMoving = true; 

            // Animación de movimiento hacia el fantasma 
            pacman.style.transition = 'left 1s linear';
            pacman.style.left = `${ghost.offsetLeft}px`;

            // Simulación de "comer" el fantasma
            setTimeout(() => {
                eatGhost();
                
                pacman.style.transition = 'left 1s linear';
                pacman.style.left = '0';
                isPacmanMoving = false; 
                ghost.style.display = 'none'; 
            }, 1000);
        }
    });

    cherry.addEventListener('click', () => {
        console.log("Cereza comida");
        score += 500;
        updateScore();
        cherry.style.display = 'none';
        ghost.style.display = 'block'; // Mostrar el fantasma después de comer la cereza
        resetGhostPosition(); // Resetear posición del fantasma
    });
    function resetGhostPosition() {
        ghost.style.left = `${initialGhostPosition}px`; // Resetear la posición del fantasma a su posición inicial
    }

    // Función para comer fantasmas
    function eatGhost() {
        score += 100;
        updateScore();
        ghostCount++;

        // Mostrar cherry cada 3 fantasmas comidos
        if (ghostCount % 3 === 0) {
            showCherry();
        } else {
            ghost.style.display = 'block';
        }

        if (score >= 5000) {
            gameOver();
        }
    }

    function showCherry() {
        cherry.style.display = 'block';
        ghost.style.display = 'none'; // Ocultar el fantasma cuando aparece la cereza
    }

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function gameOver() {
        gameOverDisplay.style.display = 'block';
    }

    // Generar fantasmas cada 2 segundos si no hay cereza
    setInterval(() => {
        if (cherry.style.display !== 'block' && ghost.style.display !== 'block') {
            ghost.style.display = 'block';
        }
    }, 2000);
});


