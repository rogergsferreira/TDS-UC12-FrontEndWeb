function verificarSintomas() {
    const checkboxes = document.querySelectorAll('.container-checkbox input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map((checkbox) => checkbox.value);

    const diseases = {
        Leptospirose: ["Dor nas articulações", "Dor muscular", "Dor de cabeça", "Febre alta", "Desidratação"],
        Tétano: ["Dor muscular", "Espasmos musculares", "Rigidez dos músculos do pescoço", "Dificuldade e dor para abrir a boca", "Cãibra na mandíbula"],
        "Diarreia aguda": ["Diarréia", "Desidratação", "Febre alta", "Vômito", "Náuseas"],
        "Hepatite A": ["Dor abdominal", "Amarelamento dos olhos e da pele", "Perda de apetite", "Febre inferior a 38ºC", "Urina escura"],
        Dengue: ["Dor nas articulações", "Dor de cabeça", "Dor muscular intensa", "Dor na parte de trás dos olhos", "Erupções cutâneas"],
    };

    const possibleDiseases = Object.keys(diseases)
        .map((disease) => {
            const matchingSymptoms = diseases[disease].filter((symptom) => selectedSymptoms.includes(symptom));
            return { name: disease, count: matchingSymptoms.length };
        })
        .filter((disease) => disease.count > 0);

    const resultData = possibleDiseases.length > 0
        ? `
            <h2>Possíveis doenças:</h2>
            <ul style="list-style-type: none; padding: 0;">
                ${possibleDiseases
            .map((disease) => `<li>${disease.name} - sintomas: ${disease.count}</li>`)
            .join('')}
            </ul>`
        : '<h2>Nenhuma doença correspondente encontrada.</h2>';

    localStorage.setItem('results', resultData);
    window.location.href = '../screens/resultados.html';
}
