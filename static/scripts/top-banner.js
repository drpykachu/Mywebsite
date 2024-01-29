var acc = document.getElementsByClassName("accordion");
var panel = document.getElementById('panelbut');
var landingImage = document.getElementById('landingImage');


function setPanelStyles() {
    if (landingImage && panel && panel.style.maxHeight) {
        var imageRect = landingImage.getBoundingClientRect();
        panel.style.top = imageRect.top + 'px';

        // You may want to add other styles or adjustments here based on your needs
    }
}

// Initial positioning
setPanelStyles();

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        setPanelStyles(); // Call the function after opening/closing the panel
    });

    // Open the first accordion initially
    if (i === 1) {
        acc[i].click();
    }
}

// Recalculate and update panel top position on window resize only if the panel is open
window.addEventListener('resize', setPanelStyles);
