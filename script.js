// Simple slider logic
const images = document.querySelectorAll('.slider img');
let current = 0;
function showImage(idx) {
    images.forEach((img, i) => img.classList.toggle('active', i === idx));
}
document.querySelector('.prev').onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
};
document.querySelector('.next').onclick = () => {
    current = (current + 1) % images.length;
    showImage(current);
};

// Self-sliding logic
setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
}, 3000); // Change image every 3 seconds