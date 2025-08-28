// Obtenemos los elementos del DOM
const form = document.getElementById('bmiForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultsArea = document.getElementById('results');
const bmiValueElement = document.getElementById('bmiValue');
const bmiMessageElement = document.getElementById('bmiMessage');

// Función para mostrar un mensaje de error personalizado
function showMessage(message) {
    // Si el modal ya existe, no crearlo de nuevo
    let modal = document.getElementById('errorModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'errorModal';
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <p id="modalMessage"></p>
            </div>
        `;
        document.body.appendChild(modal);

        // Agregamos el event listener para cerrar el modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Cierra el modal si se hace clic fuera de él
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Actualizamos el mensaje y mostramos el modal
    modal.querySelector('#modalMessage').textContent = message;
    modal.classList.add('show');
}

// Función para calcular el IMC y mostrar el resultado
function calculateBMI(e) {
    e.preventDefault(); // Previene el envío del formulario
    
    // Obtenemos los valores de los inputs
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validamos que los valores sean números positivos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        showMessage('Por favor, introduce valores válidos y positivos.');
        return;
    }

    // Convertimos la altura de cm a metros
    const heightInMeters = height / 100;
    
    // Fórmula del IMC: peso (kg) / [altura (m)]²
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Redondeamos el resultado a 2 decimales
    const roundedBmi = bmi.toFixed(2);
    
    // Determinamos el mensaje de acuerdo al resultado
    let message = '';
    let color = '';

    if (bmi < 18.5) {
        message = 'Bajo peso';
        color = '#f59e0b'; // Amarillo-naranja
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Peso normal';
        color = '#10b981'; // Verde
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Sobrepeso';
        color = '#fbbf24'; // Amarillo
    } else if (bmi >= 30) {
        message = 'Obesidad';
        color = '#ef4444'; // Rojo
    }

    // Mostramos los resultados en la UI
    bmiValueElement.textContent = `Tu IMC: ${roundedBmi}`;
    bmiValueElement.style.color = color;
    bmiMessageElement.textContent = `Clasificación: ${message}`;
    resultsArea.classList.add('show');
}

// Agregamos el "event listener" al formulario para el cálculo
form.addEventListener('submit', calculateBMI);
