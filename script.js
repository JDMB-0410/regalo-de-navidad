// --- DATOS: Las razones ---
const reasons = [
    "Amo tu humor y la forma en que me haces reír",
    "Amo tus ojos y como brillan de ilusión cuando te doy un regalo",
    "Amo tus manos y como al tomarlas, no quiero soltarlas",
    "Amo tus abrazos, por que al abrazarnos el mundo se calma",
    "Amo tu voz, es la melodía más hermosa del universo",
    "Amo tus besos, por que con cada uno de ellos me siento en las nubes",
    "Amo tu forma de ser, por que eres tan increíble siendo tú",
    "Amo tu mente, por que es un reflejo de lo única que eres",
    "Amo tu resiliencia, por que sin importar nada, jamás te rindes",
    "Amo tenerte en mi vida, por que le das color a cada instante, la haces maravillosa y perfecta"
];

let reasonIndex = 0;
let hasFinished = false;

// --- NAVEGACIÓN ---
function goToScreen(screenNumber) {
    // 1. Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-screen');
    });

    // 2. Mostrar la pantalla deseada con un pequeño retraso
    setTimeout(() => {
        const nextScreen = document.getElementById('screen' + screenNumber);
        if (nextScreen) {
            nextScreen.classList.add('active-screen');
        }
    }, 100);
}

// --- LÓGICA DE LA ESFERA ---
function revealReason() {
    const sphere = document.querySelector('.christmas-sphere');
    const textBox = document.getElementById('reason-text');
    const container = document.getElementById('reason-conteiner');

    // 1. Animación de "agitación"
    sphere.classList.remove('shake-anim');
    void sphere.offsetWidth; // Forzar reinicio de animación
    sphere.classList.add('shake-anim');

    // 2. Transición del texto
    container.style.opacity = 0; 

    setTimeout(() => {
        // Cambiar el texto
        textBox.innerHTML = `"${reasons[reasonIndex]}"`;
        
        // Mostrar
        container.style.opacity = 1;

        // Avanzar índice
        reasonIndex++;

        // Verificar si terminamos
        if (reasonIndex >= reasons.length) {
            reasonIndex = 0; 
            
            if (!hasFinished) {
                hasFinished = true;
                const finalBtn = document.getElementById('final-btn');
                finalBtn.classList.remove('hidden');
                finalBtn.style.animation = "slideUpFade 0.5s forwards"; 
            }
        }
    }, 300); 
}

// --- EFECTO DE NIEVE ---
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄'; 
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 10 + 10; 
    snowflake.style.fontSize = size + 'px';
    
    const duration = Math.random() * 3 + 4; 
    snowflake.style.animationDuration = duration + 's';

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 200);