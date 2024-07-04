// DOCUMENTADO

function handleKeyPress(event) {
    // Função para lidar com pressionamento de teclas
    const key = event.key; // Obtém a tecla pressionada
    const display = document.getElementById('display'); // Seleciona o display da calculadora
    if (key >= '0' && key <= '9') {
        // Se a tecla é um número
        appendToDisplay(key);
    } else if (key === 'Enter') {
        // Se a tecla é Enter
        calculate();
    } else if (key === 'Backspace') {
        // Se a tecla é Backspace
        backspace();
    } else if (key === 'Escape') {
        // Se a tecla é Escape (para limpar o display)
        clearDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Se a tecla é um operador
        appendToDisplay(key);
    } else if (key === '.') {
        // Se a tecla é um ponto decimal
        appendToDisplay(key);
    }
}

// Função para adicionar conteúdo ao display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Função para apagar o último caractere do display
function backspace() {
    const display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

// Função para calcular o valor no display
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Função para validar o campo de busca
function validateSearch() {
    if (document.querySelector('#q').value == '') {
        alert("You can't let the search empty!");
        return false;
    }
}

var form = document.querySelector('#form-searching');
if (form) {
    form.onsubmit = validateSearch;
}

var banners = ["Images/HTML-5.png", "Images/CSS-3.png", "Images/JS.png"];
var currentBanner = 0;

function switchBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    var img = document.querySelector('.highlight img');
    if (img) {
        img.src = banners[currentBanner];
    }
}

var timer = setInterval(switchBanner, 1000);

var control = document.querySelector('.pause');
if (control) {
    control.onclick = function () {
        if (control.className == 'pause') {
            clearInterval(timer);
            control.className = 'play';
        } else {
            timer = setInterval(switchBanner, 1000);
            control.className = 'pause';
        }
        return false;
    };
}

var playPauseControl = document.getElementById('play_pause');
if (playPauseControl) {
    playPauseControl.onclick = function () {
        var image = playPauseControl;
        if (image.src.includes('pause.png')) {
            image.src = 'Images/play.png';
            clearInterval(timer);
        } else {
            image.src = 'Images/pause.png';
            timer = setInterval(switchBanner, 1000);
        }
        return false;
    };
}
