var acc = document.getElementsByClassName("accordion");
var panel = document.getElementById('panelbut');

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // this.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

    // Open the first accordion initially
    if (i === 1) {
        acc[i].click();
    }
}
