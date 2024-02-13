var acc = document.getElementsByClassName("accordion-projects");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // Close all other panels
    var allPanels = document.querySelectorAll('.panel-projects');
    for (var j = 0; j < allPanels.length; j++) {
      if (allPanels[j] !== panel && allPanels[j].style.maxHeight) {
        allPanels[j].style.maxHeight = null;
        allPanels[j].previousElementSibling.classList.remove('active');
      }
    }

    // Toggle between adding and removing the "active" class
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel with smooth animation
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
