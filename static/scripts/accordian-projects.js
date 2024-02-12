var acc = document.getElementsByClassName("accordion-projects");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel with smooth animation */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Get the height of the panel content
      var panelHeight = panel.scrollHeight;
      // Set the max height of the panel to the calculated height
      panel.style.maxHeight = panelHeight + "px";

      // Get the top position of the panel relative to the viewport
      var panelTop = panel.getBoundingClientRect().top;
      // Scroll the window down to the top position of the panel
      window.scrollBy({
        top: panelTop,
        behavior: "smooth"
      });
    }
  });
}
