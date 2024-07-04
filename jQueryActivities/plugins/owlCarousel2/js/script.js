// DOCUMENTADO

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // Permite o carousel fazer loop
        margin: 10, // Margem entre os itens
        nav: true, // Mostra setas de navegação (próximo/anterior)
        autoplay: true, // Habilita o slide automático
        autoplayTimeout: 3000, // Intervalo do autoplay em milissegundos (3 segundos)
        responsive: {
            0: {
                items: 1 // Número de itens a mostrar em telas pequenas
            },
            600: {
                items: 2 // Número de itens a mostrar em telas médias
            },
            1000: {
                items: 3 // Número de itens a mostrar em telas grandes
            }
        }
    });
});
