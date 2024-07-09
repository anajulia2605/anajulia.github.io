$(document).ready(function () {
    $('#cadastroForm').on('submit', function (event) {
        event.preventDefault();

        let nome = $('#nome').val();
        let idade = $('#idade').val();
        let mensagem = $('#mensagem').val();

        let cadastro = {
            nome: nome,
            idade: idade,
            mensagem: mensagem
        };

        localStorage.setItem('userData', JSON.stringify(cadastro));

        $('#result').html(`
            <p>Nome: ${nome}</p>
            <p>Idade: ${idade}</p>
            <p>Mensagem: ${mensagem}</p>
        `);

        // Limpa o formulário
        $('#cadastroForm')[0].reset();
    });
});

$(document).ready(function () {
    // Inicializa o slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".slide");
        slides.each(function(index) {
            $(this).css("display", "none");
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides.eq(slideIndex - 1).css("display", "block");
        setTimeout(showSlides, 3000); // Muda de imagem a cada 3 segundos
    }

    // Carrega dados do local storage e exibe
    function loadCadastro() {
        let cadastro = JSON.parse(localStorage.getItem('cadastro'));
        if (cadastro) {
            $('#result').html(`
                <p>Nome: ${cadastro.nome}</p>
                <p>Idade: ${cadastro.idade}</p>
                <p>Mensagem: ${cadastro.mensagem}</p>
            `);
        }
    }

    loadCadastro();

    // Manipula o envio do formulário
    $('#cadastroForm').on('submit', function (event) {
        event.preventDefault();

        let nome = $('#nome').val();
        let idade = $('#idade').val();
        let mensagem = $('#mensagem').val();

        let cadastro = {
            nome: nome,
            idade: idade,
            mensagem: mensagem
        };

        localStorage.setItem('cadastro', JSON.stringify(cadastro));

        $('#result').html(`
            <p>Nome: ${nome}</p>
            <p>Idade: ${idade}</p>
            <p>Mensagem: ${mensagem}</p>
        `);

        // Limpa o formulário
        $('#cadastroForm')[0].reset();
    });
});
