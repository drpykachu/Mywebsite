window.onload = function () {
    initializeRainAnimation();
};

window.onresize = function () {
    initializeRainAnimation();
};

function initializeRainAnimation() {
    var img = document.querySelector('.landing-photo');
    var canvas = document.getElementById('rainCanvas');
    var container = document.querySelector('.zoom-container'); // Use querySelector to get the first element
    
    var containerHeight = container.clientHeight;
    canvas.width = img.width;
    canvas.height = img.height;
    // canvas.height = containerHeight; // Set canvas height to the height of zoomcontainer
    
    
    
    var ctx = canvas.getContext('2d');
    var drops = [];
    var theta = 110;

    function createDrop() {
        return {
            angle: theta * (Math.PI / 180),
            x: Math.random() * (canvas.width + Math.cos(theta) * (Math.PI / 180)),
            y: Math.random() * (img.height + Math.sin(theta) * (Math.PI / 180)),
            // speed: img.height*(2 + Math.random() * 3)/750,
            speed: (2 + Math.random() * 3)/2,
            length: 25 + Math.random() * 10,
            width: 5 + Math.random() * 4,
        };
    }

    for (var i = 0; i < img.height / 5; i++) {
        drops.push(createDrop());
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineJoin = "round";

        for (var i = 0; i < drops.length; i++) {
            var drop = drops[i];

            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.width / 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 216, 250, 0.6)';
            ctx.fill();

            var endX = drop.x + drop.length * Math.cos(drop.angle);
            var endY = drop.y + drop.length * Math.sin(drop.angle);

            ctx.beginPath();
            ctx.arc(endX, endY, drop.width / 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 216, 250, 0.6)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = drop.width;
            ctx.strokeStyle = 'rgba(100, 216, 250, 0.6)';
            ctx.stroke();

            drop.x += drop.speed * Math.cos(drop.angle);
            drop.y += drop.speed * Math.sin(drop.angle);

            if (drop.y > (img.height)) {
                drop.y = -(50);
            }
            if (drop.x < 0) {
                drop.x = (canvas.width + Math.cos(theta) * (Math.PI / 180));
            }
        }

        requestAnimationFrame(draw);
    }

    draw();
}
