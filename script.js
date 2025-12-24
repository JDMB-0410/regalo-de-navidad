// FECHA
function setDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = "📅 " + now.toLocaleDateString('es-ES', options);
}
setDate();

// RAZONES
const reasons = [
    "Amo tu humor y la forma en que me haces reír",
    "Amo tus ojos y como brillan de ilusión",
    "Amo tus manos y como al tomarlas, no quiero soltarlas",
    "Amo tus abrazos, en ellos el mundo se calma",
    "Amo tu voz, es mi melodía favorita",
    "Amo tus besos, me llevan a las nubes",
    "Amo tu forma de ser, eres increíble siendo tú",
    "Amo tu mente, reflejo de lo única que eres",
    "Amo tu resiliencia, jamás te rindes",
    "Amo tenerte en mi vida, la haces perfecta"
];

let reasonIndex = 0;
let hasFinished = false;
let isFirstClick = true;

// NAVEGACIÓN
function goToScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-screen');
    });
    setTimeout(() => {
        const nextScreen = document.getElementById('screen' + screenNumber);
        if (nextScreen) nextScreen.classList.add('active-screen');
    }, 100);
}

// EFECTO NIEVE INTERNA
function createInternalSnow() {
    const container = document.getElementById('internal-snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('internal-snowflake');
    snowflake.innerHTML = '•'; 
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.fontSize = (Math.random() * 12 + 6) + 'px';
    snowflake.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
    container.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 1500);
}

// EFECTO CORAZONES EXTERNOS
function createExternalHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('floating-heart');
    const sphere = document.querySelector('.christmas-sphere');
    const rect = sphere.getBoundingClientRect();
    const x = rect.left + (rect.width / 2) + (Math.random() * 60 - 30); 
    const y = rect.top + (rect.height / 2) + (Math.random() * 40 - 20);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

// LÓGICA AL CLICK
function revealReason() {
    const sphere = document.querySelector('.christmas-sphere');
    const textBox = document.getElementById('reason-text');
    const textContainer = document.getElementById('reason-conteiner');
    const instruction = document.getElementById('sphere-instruction');

    if(isFirstClick) {
        instruction.innerHTML = "¡Sigue agitando para descubrir más! ✨";
        instruction.classList.remove('highlight');
        isFirstClick = false;
    }

    sphere.classList.remove('shake-anim');
    void sphere.offsetWidth; 
    sphere.classList.add('shake-anim');

    for(let i=0; i<25; i++) { setTimeout(createInternalSnow, i * 30); }
    for(let i=0; i<8; i++) { setTimeout(createExternalHeart, i * 100); }

    textContainer.style.opacity = 0;
    setTimeout(() => {
        textBox.innerHTML = `"${reasons[reasonIndex]}"`;
        textContainer.style.opacity = 1;
        reasonIndex++;
        if (reasonIndex >= reasons.length) {
            reasonIndex = 0;
            if (!hasFinished) {
                hasFinished = true;
                const finalBtn = document.getElementById('final-btn');
                finalBtn.classList.remove('hidden');
                finalBtn.style.animation = "slideUpFade 0.5s forwards"; 
                instruction.innerHTML = "¡Has descubierto todas las razones! 💖";
            }
        }
    }, 300);
}

// NIEVE FONDO
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const flakeTypes = ['❄', '❅', '❆'];
    snowflake.innerHTML = flakeTypes[Math.floor(Math.random() * flakeTypes.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 15 + 8) + 'px';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snowContainer.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 10000);
}
setInterval(createSnowflake, 150);