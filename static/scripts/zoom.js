// Store the initial scale factor
let initialScaleFactor;

function updateZoom() {
  const container = document.querySelector('.zoom-container');
  const image = document.querySelector('.zoom-image');
  const containerRect = container.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();

  // Calculate the current scale factor
  const currentScaleFactor = containerRect.width / imageRect.width;

  // Set maximum and minimum zoom levels
  const maxScale = 1.5;
  const minScale = 0.1;

  // If initialScaleFactor is not set, set it to the current scale factor
  if (!initialScaleFactor) {
    initialScaleFactor = currentScaleFactor;
  }

  // Calculate the scale value within the specified range
  const scaleValue = Math.min(maxScale, Math.max(minScale, currentScaleFactor / initialScaleFactor));

  // Set the transform-origin to the top-left corner
  image.style.transformOrigin = 'top left';
  image.style.transform = `scale(${scaleValue})`;
}

window.addEventListener('resize', updateZoom);
window.addEventListener('DOMContentLoaded', updateZoom);
