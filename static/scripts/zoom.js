function updateZoom() {
    const container = document.querySelector('.zoom-container');
    const image = document.querySelector('.zoom-image');
    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    const scaleFactor = containerRect.width / imageRect.width;
    const scaleValue = Math.min(scaleFactor, 1); // Limit maximum scale

    image.style.transform = `scale(${scaleValue})`;
}

window.addEventListener('resize', updateZoom);
window.addEventListener('DOMContentLoaded', updateZoom);