// mouse function rain function
function cursor_loc(){
    const mouseCoordinatesElement = document.getElementById("mouse-coordinates");
    document.addEventListener("mousemove", function(event) {
        // Get the mouse coordinates
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        mouseCoordinatesElement.textContent = `Mouse Coordinates: X ${mouseX}, Y ${mouseY}`;
    });
};
