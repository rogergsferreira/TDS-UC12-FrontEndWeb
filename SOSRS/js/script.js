// Adiciona um evento de clique ao corpo do documento
document.body.addEventListener('click', (evento) => {
    // Verifica se o elemento clicado não é um dos botões ou divs específicas
    if (evento.target.id !== 'botao-verificar' && evento.target.id !== 'botao-voltar' && evento.target.id !== 'resultados' && evento.target.id !== 'sintomas-doencas') {
        const conteudoInicial = document.getElementById('conteudo-inicial'); // Seleciona a div do conteúdo inicial
        const sintomasD = document.getElementById('sintomas-doencas'); // Seleciona a div dos sintomas

        // Adiciona a classe 'fade' para iniciar uma transição
        conteudoInicial.classList.add('fade');
        setTimeout(() => {
            conteudoInicial.style.display = 'none'; // Esconde o conteúdo inicial após 1 segundo
            sintomasD.style.display = 'block'; // Mostra a div dos sintomas
            setTimeout(() => {
                sintomasD.style.opacity = '1'; // Define a opacidade da div dos sintomas para torná-la visível
            }, 10);
        }, 1000);
    }
});

// Adiciona um evento de clique ao botão 'Verificar'
document.getElementById('botao-verificar').addEventListener('click', () => {
    const caixasMarcadas = document.querySelectorAll('.container-checkbox input[type="checkbox"]:checked'); // Seleciona todas as caixas de seleção marcadas
    const sintomasSelecionados = Array.from(caixasMarcadas).map(caixa => caixa.value); // Extrai os valores das caixas de seleção marcadas
    const sintomasD = document.getElementById('sintomas-doencas'); // Seleciona a div dos sintomas
    const resultados = document.getElementById('resultados'); // Seleciona a div dos resultados

    // Objeto que mapeia doenças para seus respectivos sintomas
    const doencas = {
        "Leptospirose": ["Dor nas articulações", "Dor muscular", "Dor de cabeça", "Febre alta", "Desidratação"],
        "Tétano": ["Dor muscular", "Espasmos musculares", "Rigidez dos músculos do pescoço", "Dificuldade e dor para abrir a boca", "Cãibra na mandíbula"],
        "Diarreia aguda": ["Diarréia", "Desidratação", "Febre alta", "Vômito", "Náuseas"],
        "Hepatite A": ["Dor abdominal", "Amarelamento dos olhos e da pele", "Perda de apetite", "Febre inferior a 38ºC", "Urina escura"],
        "Dengue": ["Dor nas articulações", "Dor de cabeça", "Dor muscular intensa", "Dor na parte de trás dos olhos", "Erupções cutâneas"]
    };

    // Mapeia doenças para a contagem de sintomas correspondentes selecionados
    const possiveisDoencas = Object.keys(doencas).map(doenca => {
        const sintomasCorrespondentes = doencas[doenca].filter(sintoma => sintomasSelecionados.includes(sintoma));
        return {
            nome: doenca,
            contagem: sintomasCorrespondentes.length
        };
    }).filter(doenca => doenca.contagem > 0); // Filtra apenas as doenças com sintomas correspondentes

    sintomasD.style.display = 'none'; // Esconde a div dos sintomas

    if (possiveisDoencas.length > 0) {
        // Se houver possíveis doenças, exibe-as em uma lista
        resultados.innerHTML = `<h2>Possíveis doenças:</h2><ul>${possiveisDoencas.map(doenca => {
            const sintomaOuSintomas = doenca.contagem > 1 ? 'sintomas' : 'sintoma';
            return `<li>${doenca.nome}: ${doenca.contagem} ${sintomaOuSintomas}</li>`;
        }).join('')}</ul><button id="botao-voltar">Voltar</button>`;
    } else {
        // Se nenhuma doença for encontrada, exibe uma mensagem de erro
        resultados.innerHTML = `<h2>Nenhuma doença correspondente encontrada.</h2><button id="botao-voltar">Voltar</button>`;
    }

    resultados.style.display = 'block'; // Mostra a div dos resultados
});

// Adiciona um evento de clique à div dos resultados
document.getElementById('resultados').addEventListener('click', (evento) => {
    // Verifica se o botão 'Voltar' foi clicado
    if (evento.target.id === 'botao-voltar') {
        const sintomasD = document.getElementById('sintomas-doencas'); // Seleciona a div dos sintomas
        const resultados = document.getElementById('resultados'); // Seleciona a div dos resultados

        resultados.style.display = 'none'; // Esconde a div dos resultados
        sintomasD.style.display = 'block'; // Mostra a div dos sintomas
    }
});
