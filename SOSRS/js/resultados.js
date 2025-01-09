document.addEventListener('DOMContentLoaded', () => {
    const results = localStorage.getItem('results');
    const resultsDiv = document.getElementById('resultados');
    resultsDiv.innerHTML = results || '<h2>Nenhum resultado encontrado.</h2>';
});
