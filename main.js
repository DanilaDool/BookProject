const images = document.querySelectorAll('.image-container img');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.getElementById('closeBtn');

// Показ изображения при клике
images.forEach(image => {
    image.addEventListener('click', () => {
        overlayImage.src = image.src;
        overlay.classList.add('show');
    });
});

// Закрытие по клику на кнопку
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
});

// Закрытие по клику на фон
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('show');
    }
});

// Закрытие по нажатию клавиши Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.classList.remove('show');
    }
});

    function animateCounter(id, endValue, duration = 2000) {
    const counter = document.getElementById(id);
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 16)); // ~60fps

    const step = () => {
    start += increment;
    if (start >= endValue) {
    counter.textContent = endValue;
} else {
    counter.textContent = start;
    requestAnimationFrame(step);
}
};

    requestAnimationFrame(step);
}

    document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("reviewCounter");
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
    animateCounter("reviewCounter", 1273, 2000);
    hasAnimated = true;
    observer.unobserve(target);
}
});
}, {
    threshold: 0.5 // счётчик должен быть виден хотя бы на 50%
});

    observer.observe(target);
});



