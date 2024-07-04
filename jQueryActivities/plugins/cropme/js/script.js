// DOCUMENTADO

$(document).ready(function () {
    var cropmeInstance; // Variável para armazenar a instância do Cropme

    // Função para inicializar o Cropme com uma imagem específica
    function initializeCropme(imageSrc) {
        $('#image-container').html('<img id="image-preview" src="' + imageSrc + '" alt="Image to crop">');
        // Inicializa o Cropme com as configurações específicas
        cropmeInstance = $('#image-preview').cropme({
            container: {
                width: '100%', // Largura do contêiner de visualização
                height: 400 // Altura do contêiner de visualização
            },
            viewport: {
                width: 300, // Largura da área de visualização
                height: 200, // Altura da área de visualização
                type: 'square' // Tipo de área de visualização (quadrada ou circular)
            },
            zoom: {
                max: 3 // Zoom máximo permitido
            }
        });
    }

    // Evento de mudança no campo de upload de imagem
    $('#inputImage').on('change', function (event) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Destroi a instância atual do Cropme se existir
            if (cropmeInstance) {
                cropmeInstance.cropme('destroy');
            }
            // Inicializa o Cropme com a imagem carregada
            initializeCropme(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]); // Lê o arquivo de imagem como URL de dados
    });

    // Evento de clique no botão 'Crop Image'
    $('#cropButton').on('click', function () {
        if (cropmeInstance) {
            // Executa o recorte da imagem e obtém o resultado em base64
            cropmeInstance.cropme('crop', {
                type: 'base64' // Formato de saída do recorte (base64 neste caso)
            }).then(function (output) {
                console.log(output); // Exibe a imagem recortada em formato base64 no console
                // Você pode exibir a imagem recortada ou enviá-la para o servidor
                $('#image-container').html('<img src="' + output + '" alt="Cropped Image">');
                cropmeInstance = null; // Reseta a instância do Cropme
            });
        } else {
            alert('Please upload an image first.'); // Alerta se nenhuma imagem foi carregada
        }
    });

    // Evento de clique no botão 'Reset'
    $('#resetButton').on('click', function () {
        if (cropmeInstance) {
            cropmeInstance.cropme('destroy'); // Destroi a instância atual do Cropme
        }
        initializeCropme('./images/600x400.png'); // Inicializa o Cropme com a imagem padrão
        $('#inputImage').val(''); // Limpa o campo de upload de imagem
    });

    // Inicializa o Cropme com a imagem padrão ao carregar a página
    initializeCropme('./images/600x400.png');
});
