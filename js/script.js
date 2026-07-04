// Garante que o código jQuery só rode após a página carregar completamente
$(document).ready(function() {

  /* ==========================================================
       EFEITO INTERATIVO 1: Animação de Entrada e Hover nos Cards
       ========================================================== */
    // Faz o card surgir subindo a opacidade e voltando ao tamanho normal ao mesmo tempo
    $('.card-projeto').animate({
        opacity: 1,
        parseFloat: 1 // Truque para o jQuery entender o encadeamento
    }, 600, function() {
    });

    // Mantém o efeito de foco ao passar o mouse
    $('.card-projeto').hover(
        function() {
            $(this).siblings('.card-projeto').css('opacity', '0.6');
        }, 
        function() {
            $('.card-projeto').css('opacity', '1');
        }
    );


   /* ==========================================================
       EFEITO INTERATIVO 2: Destaque Visual nos Campos do Formulário
       ========================================================== */
    // Quando o usuário clica em um campo, destaca com transparência. Quando sai, volta ao normal.
    $('input, textarea').focus(function() {
        $(this).css('background-color', 'rgba(56, 189, 248, 0.15)'); // Um azul neon bem sutil e transparente
    });
    
    $('input, textarea').blur(function() {
        $(this).css('background-color', 'rgba(15, 23, 42, 0.6)'); // Volta para o fundo escuro original do card
    });


    /* ==========================================================
       VALIDAÇÃO DO FORMULÁRIO DE CONTATO
       ========================================================== */
    $('#formContato').submit(function(event) {
        // Interrompe o envio padrão do formulário para poder validar antes
        event.preventDefault();

        // Captura os valores digitados pelo usuário
        let nome = $('#nome').val().trim();
        let email = $('#email').val().trim();
        let mensagem = $('#mensagem').val().trim();

        // Regra simples para checar se o e-mail tem um formato válido (@ e ponto)
        let filtroEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        // 1. Validação do campo Nome
        if (nome === "") {
            alert("Por favor, preencha o seu nome.");
            $('#nome').focus();
            return false;
        }

        // 2. Validação do campo E-mail
        if (email === "") {
            alert("Por favor, preencha o seu e-mail.");
            $('#email').focus();
            return false;
        } else if (!filtroEmail.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            $('#email').focus();
            return false;
        }

        // 3. Validação do campo Mensagem
        if (mensagem === "") {
            alert("Por favor, digite sua mensagem.");
            $('#mensagem').focus();
            return false;
        }

        // Se passar por todas as validações, exibe a mensagem de sucesso
        alert("Sucesso! Sua mensagem foi validada e está sendo enviada.");
        
        this.submit(); 
    });
});