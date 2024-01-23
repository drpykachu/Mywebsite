window.onload = function () {
    var img = document.querySelector('.landing-photo');
    var canvas = document.getElementById('rainCanvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    var drops = [];
    var theta = 110;

    function createDrop() {
        return {
                
            angle: theta * (Math.PI / 180), // Random angle for diagonal movement
            x: Math.random() * (canvas.width + Math.cos(theta)* (Math.PI / 180)),
            y: Math.random() * (img.height  + Math.sin(theta)* (Math.PI / 180)) ,
            speed: 3 + Math.random() * 3,
            length: 40 + Math.random() * 10,
            width: 7 + Math.random() * 4,
        };
    }

    for (var i = 0; i < 500; i++) {
        drops.push(createDrop());
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineJoin = "round";

        for (var i = 0; i < drops.length; i++) {
            var drop = drops[i];

              // Draw circles at the ends of the raindrops
            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.width / 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 216, 250, 0.6)'; // Fill color for the circles
            ctx.fill();

            var endX = drop.x + drop.length * Math.cos(drop.angle);
            var endY = drop.y + drop.length * Math.sin(drop.angle);

            ctx.beginPath();
            ctx.arc(endX, endY, drop.width / 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 216, 250, 0.6)'; // Fill color for the circles
            ctx.fill();

            // Draw the raindrop connecting the circles
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = drop.width;
            ctx.strokeStyle = 'rgba(100, 216, 250, 0.6)';
            ctx.stroke();

            drop.x += drop.speed * Math.cos(drop.angle); // Update x-coordinate based on angle
            drop.y += drop.speed * Math.sin(drop.angle); // Update y-coordinate based on angle

            if (drop.y > (img.height )) {
                drop.y = -(50);
                // drop.x = Math.random() * (canvas.width + Math.cos(theta)* (Math.PI / 180)) // Reset coordinates when reaching the bottom or right edge
            } 
            if (drop.x < 0) {
                // drop.y = img.height;
                drop.x =  (canvas.width + Math.cos(theta)* (Math.PI / 180))// Reset coordinates when reaching the bottom or right edge
            }
            
        }

        requestAnimationFrame(draw);
    }

    draw();
};
