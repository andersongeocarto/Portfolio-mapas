// script.js
// Adicione JavaScript global aqui, se necessário.
// Por exemplo, para rolagem suave ao clicar nos links da navegação.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});