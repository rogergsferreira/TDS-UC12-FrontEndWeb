// DOCUMENTADO

$(document).ready(function () { // Ensure the DOM is fully loaded / Garantir que o DOM esteja completamente carregado
    $("#registrationForm").validate({
        rules: { // Validation rules / Regras de validação
            name: {
                required: true, // Name is required / Nome é obrigatório
                minlength: 2 // Minimum length is 2 characters / Comprimento mínimo é 2 caracteres
            },
            email: {
                required: true, // Email is required / Email é obrigatório
                email: true // Must be a valid email / Deve ser um email válido
            },
            password: {
                required: true, // Password is required / Senha é obrigatória
                minlength: 6 // Minimum length is 6 characters / Comprimento mínimo é 6 caracteres
            }
        },
        messages: { // Custom error messages / Mensagens de erro personalizadas
            name: {
                required: "Please enter your name", // Message when name is not entered / Mensagem quando o nome não é inserido
                minlength: "Your name must be at least 2 characters long" // Message for short name / Mensagem para nome curto
            },
            email: {
                required: "Please enter your email", // Message when email is not entered / Mensagem quando o email não é inserido
                email: "Please enter a valid email address" // Message for invalid email / Mensagem para email inválido
            },
            password: {
                required: "Please provide a password", // Message when password is not entered / Mensagem quando a senha não é inserida
                minlength: "Your password must be at least 6 characters long" // Message for short password / Mensagem para senha curta
            }
        },
        submitHandler: function (form) { // Function to handle form submission / Função para lidar com o envio do formulário
            alert("Form successfully submitted!"); // Alert on successful submission / Alerta ao envio bem-sucedido
            form.submit(); // Submit the form / Enviar o formulário
        }
    });
});
