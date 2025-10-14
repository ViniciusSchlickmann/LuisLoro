// 1. Seleção de Elementos
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// 2. Variáveis de Estado
let currentSlideIndex = 0;
const totalSlides = slides.length;

// 3. Função para Mover o Carrossel
function updateCarousel() {
    // Calcula o quanto o slidesWrapper deve ser movido horizontalmente
    // Multiplica o índice atual por 100 e inverte o sinal (para mover para a esquerda)
    const offset = -currentSlideIndex * 100; 
    slidesWrapper.style.transform = `translateX(${offset}%)`;
}

// 4. Funções de Navegação
function goToNextSlide() {
    // Avança o índice, voltando para 0 se for o último slide (loop)
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
}

function goToPrevSlide() {
    // Volta o índice. Se for o primeiro (0), vai para o último (totalSlides - 1)
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// 5. Adicionar Event Listeners aos Botões
prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

/* 6. Recurso Opcional: Transição Automática */
let autoSlideInterval = setInterval(goToNextSlide, 3000); // Muda a cada 3 segundos (3000ms)

// (Opcional) Pausar ao passar o mouse
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval); // Para a transição
});

carouselContainer.addEventListener('mouseleave', () => {
    // Reinicia a transição ao tirar o mouse
    autoSlideInterval = setInterval(goToNextSlide, 3000); 
});

// Inicializa a primeira exibição
updateCarousel();