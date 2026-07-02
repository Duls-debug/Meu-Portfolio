// Garante que o código jQuery só rode após a página carregar completamente
$(document).ready(function() {

    /* ==========================================================
       EFEITO INTERATIVO 1: Animação de Entrada nos Cards de Projetos
       ========================================================== */
    // Esconde os cards assim que a página carrega e faz eles surgirem suavemente
    $('.card-projeto').hide().fadeIn(1200);


    /* ==========================================================
       EFEITO INTERATIVO 2: Destaque Visual nos Campos do Formulário
       ========================================================== */
    // Quando o usuário clica em um campo, muda o fundo. Quando sai, volta ao normal.
    $('input, textarea').focus(function() {
        $(this).css('background-color', '#e8f4fd');
    });
    
    $('input, textarea').blur(function() {
        $(this).css('background-color', '#fcfcfc');
    });


    /* ==========================================================
       VALIDAÇÃO DO FORMULÁRIO DE CONTATO
       ========================================================== */
    $('#formContato').submit(function(event) {
        // Interrompe o envio padrão do formulário para podermos validar antes
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
        alert("Sucesso! Sua mensagem foi validada e enviada.");
        
        // Limpa o formulário após o envio
        this.reset();
    });

});