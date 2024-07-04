// DOCUMENTADO

function validateSearch() {
    // Função para validar o campo de busca
    // Verifica se o campo de busca está vazio
    if (document.querySelector('#q').value == '') {
        // Se estiver vazio, exibe um alerta e impede o envio do formulário
        alert("You can't let the search empty!");
        return false;
    }
}

// Adiciona um evento de 'submit' ao formulário de busca, que chama a função validateSearch
document.querySelector('#form-searching').onsubmit = validateSearch;

// Array contendo os caminhos das imagens dos banners
var banners = ["Images/HTML-5.png", "Images/CSS-3.png", "Images/JS.png"];
var currentBanner = 3; // Define o índice inicial do banner

function switchBanner() {
    // Função para alternar os banners
    currentBanner = (currentBanner + 1) % 3; // Incrementa o índice e reseta ao atingir 3
    document.querySelector('.highlight img').src = banners[currentBanner]; // Atualiza a imagem do banner
}

// Define um temporizador que chama a função switchBanner a cada 1000 milissegundos (1 segundo)
var timer = setInterval(switchBanner, 1000);

// Seleciona o elemento com a classe 'pause'
var control = document.querySelector('.pause');
control.onclick = function () {
    // Função para alternar entre pausar e retomar a troca de banners
    if (control.className == 'pause') {
        // Se o botão está em estado de 'pause', interrompe o temporizador e altera a classe para 'play'
        clearInterval(timer);
        control.className = 'play';
    } else {
        // Se o botão está em estado de 'play', reinicia o temporizador e altera a classe para 'pause'
        timer = setInterval(switchBanner, 1000);
        control.className = 'pause';
    }
    return false; // Impede a ação padrão do clique
};

// Seleciona novamente o elemento com a classe 'pause' (redundante, pode ser removido)
var control = document.querySelector('.pause');

control.onclick = function () {
    // Função para alternar a imagem do botão de play/pause e a troca de banners
    var image = document.getElementById('play_pause'); // Seleciona a imagem do botão

    if (image.src.includes('pause.png')) {
        // Se a imagem atual é de 'pause', troca para 'play' e interrompe o temporizador
        image.src = 'Images/play.png';
        clearInterval(timer);
    } else {
        // Se a imagem atual é de 'play', troca para 'pause' e reinicia o temporizador
        image.src = 'Images/pause.png';
        timer = setInterval(switchBanner, 1000);
    }

    return false; // Impede a ação padrão do clique
};
