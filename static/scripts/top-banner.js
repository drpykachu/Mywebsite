var acc = document.getElementsByClassName("accordion");
var panel = document.getElementById('panelbut');
var spaceBase1 = document.getElementById('spacebase1');
var spaceBase2 = document.getElementById('spacebase2');


function setPanelStyles() {
    if (spaceBase1 &&spaceBase2 && panel && panel.style.maxHeight) {
        var spaceBaseRect1 = spaceBase1.getBoundingClientRect();
        var spaceBaseRect2 = spaceBase2.getBoundingClientRect();
        panel.style.top = (spaceBaseRect1.top + spaceBaseRect2.bottom)  + 'px';
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
window.addEventListener('scroll', setPanelStyles);
