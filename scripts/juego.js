// Definimos las variables del juego
let randomNumber;
let attempts = 0;
const maxAttempts = 10;

// Obtenemos los elementos del DOM
const form = document.getElementById('gameForm');
const guessInput = document.getElementById('guess');
const newGameBtn = document.getElementById('newGameBtn');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

// Función para inicializar el juego
function startGame() {
    // Generamos un número aleatorio entre 1 y 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    
    // Reseteamos la UI
    guessInput.value = '';
    messageElement.textContent = '¡Adivina el número!';
    attemptsElement.textContent = `Intentos restantes: ${maxAttempts}`;
    guessInput.disabled = false;
    form.querySelector('.btn-primary').style.display = 'block';
    newGameBtn.style.display = 'none';
}

// Función para manejar el intento del usuario
function checkGuess(event) {
    event.preventDefault();

    const userGuess = parseInt(guessInput.value);
    
    // Validamos la entrada del usuario
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    attempts++;

    // Comparamos el intento con el número aleatorio
    if (userGuess === randomNumber) {
        messageElement.textContent = `¡Correcto! Adivinaste el número en ${attempts} intentos.`;
        messageElement.style.color = '#10b981'; // Verde
        endGame();
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'El número que busco es más alto.';
        messageElement.style.color = '#fbbf24'; // Amarillo
    } else {
        messageElement.textContent = 'El número que busco es más bajo.';
        messageElement.style.color = '#fbbf24'; // Amarillo
    }

    // Actualizamos el contador de intentos
    attemptsElement.textContent = `Intentos restantes: ${maxAttempts - attempts}`;

    // Si se acaban los intentos
    if (attempts >= maxAttempts && userGuess !== randomNumber) {
        messageElement.textContent = `¡Lo siento, se te acabaron los intentos! El número era ${randomNumber}.`;
        messageElement.style.color = '#ef4444'; // Rojo
        endGame();
    }
}

// Función para finalizar el juego
function endGame() {
    guessInput.disabled = true;
    form.querySelector('.btn-primary').style.display = 'none';
    newGameBtn.style.display = 'block';
}

// Event Listeners
form.addEventListener('submit', checkGuess);
newGameBtn.addEventListener('click', startGame);

// Iniciamos el juego cuando la página carga
window.onload = startGame;
