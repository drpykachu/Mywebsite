document.addEventListener('DOMContentLoaded', function () {
  const bannerContainer = document.querySelector('.banner-container');
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    bannerContainer.classList.toggle('active');
  });
});
