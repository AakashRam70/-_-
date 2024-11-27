let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImage.src = images[currentIndex].src;
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};
