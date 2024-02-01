var zoomed = document.getElementById('zoomcontainer');
var img = document.querySelector('.landing-photo');
var canvas = document.getElementById('rainCanvas');

function setRainStyles() {
  var zoomRect = zoomed.getBoundingClientRect();
  var imgRect = img.getBoundingClientRect();

  canvas.style.top = zoomRect.top + 'px';
  canvas.style.height = Math.min((imgRect.bottom - imgRect.top),(zoomRect.bottom - zoomRect.top)) + 'px';
  // canvas.style.height = 10 + 'px';
  canvas.style.width = Math.max((imgRect.right - imgRect.left),(zoomRect.right - zoomRect.left)) + 'px';

  // You may want to add other styles or adjustments here based on your needs
}

// Initial positioning
setRainStyles();

window.addEventListener('resize', setRainStyles);

// Debounce function
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// Your function to be executed when window stops resizing
function handleResize() {
  initializeRainAnimation();
}

// Attach the debounced function to the window resize event
window.onload = function () {
  initializeRainAnimation();
  window.onresize = debounce(handleResize, 500); // You can adjust the delay (in milliseconds) as needed
};

function initializeRainAnimation() {
  // Your existing code remains unchanged


  canvas.width = img.width;
  canvas.height = img.height;


  var ctx = canvas.getContext('2d');
  var drops = [];
  var theta = 110;

  function createDrop() {
    return {
      angle: theta * (Math.PI / 180),
      angleinv: (90 - theta) * (Math.PI / 180),
      x: Math.random() * (canvas.width + Math.cos(theta * (Math.PI / 180))),
      y: Math.random() * (canvas.height + Math.sin(theta * (Math.PI / 180))),
      speed: canvas.width/800*(2 + Math.random() * 3)/2,
      length: canvas.width/800*(25 + Math.random() * 10),
      width: canvas.width/800*(5 + Math.random()) ,
    };
  }

  for (var i = 0; i < canvas.width/canvas.height*50; i++) {
    drops.push(createDrop());
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineJoin = "round";

    for (var i = 0; i < drops.length; i++) {
      var drop = drops[i];

      ctx.beginPath();
      ctx.arc(drop.x, drop.y, drop.width / 2, Math.PI-drop.angleinv,-drop.angleinv,0);
      ctx.fillStyle = 'rgba(100, 216, 250, 0.6)';
      ctx.fill();

      var endX = drop.x + drop.length * Math.cos(drop.angle);
      var endY = drop.y + drop.length * Math.sin(drop.angle);

      ctx.beginPath();
      ctx.arc(endX, endY, drop.width / 2, -drop.angleinv, Math.PI-drop.angleinv);
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

      if (drop.y > (img.height + 10)) {
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
