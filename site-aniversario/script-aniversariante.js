$(document).ready(function () {
    // Dados do aniversariante
    
    // Carrega dados do local storage
    function loadAniversariante() {
        let dados = JSON.parse(localStorage.getItem('userData'));
        if (dados) {
            $('#nome').text(dados.name);
            $('#idade').text(`Idade: ${dados.age}`);
            $('#mensagem').text(dados.message);
        }
    }

    loadAniversariante();

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
});
