// Definindo as imagens
let currentIndex = 0;
const images = ['touro1.jpeg', 'touro2.jpeg', 'touro3.jpeg'];

// Função para abrir o lightbox
function openLightbox(imageUrl) {
    const imageIndex = images.indexOf(imageUrl);

    if (imageIndex !== -1) {
        currentIndex = imageIndex;
        updateLightbox();
        document.getElementById('lightbox').style.display = 'flex';
    } else {
        console.error('Erro: Imagem não encontrada no array.');
    }
}

// Função para fechar o lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Função para atualizar o lightbox com a imagem atual
function updateLightbox() {
    const imageUrl = images[currentIndex];
    document.getElementById('lightbox-image').src = imageUrl;
}

// Event Listener para fechar o lightbox ao pressionar a tecla Escape
document.addEventListener('keydown', function (event) {
    if (document.getElementById('lightbox').style.display === 'flex' && event.key === 'Escape') {
        closeLightbox();
    }
});

// Event Listener para fechar o lightbox ao clicar na imagem
document.getElementById('lightbox-image').addEventListener('click', function () {
    closeLightbox();
});
