let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 4000);

document.getElementById('loginBtn').onclick = () => {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('pedidoModal').style.display = 'none';
};

document.getElementById('pedidoBtn').onclick = () => {
    document.getElementById('pedidoModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};
const searchInput = document.querySelector('.search-bar input');
const productos = document.querySelectorAll('.producto');

searchInput.addEventListener('input', () => {
    const filtro = searchInput.value.toLowerCase();

    productos.forEach(prod => {
        const nombre = prod.dataset.nombre.toLowerCase();
        if (nombre.includes(filtro)) {
            prod.style.display = 'block';
        } else {
            prod.style.display = 'none';
        }
    });
});