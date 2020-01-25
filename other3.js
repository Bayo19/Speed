// black canvas with random coloured balls that grow when the mouse is near them but also increase in speed randomly and in different directions

var canvas = document.querySelector('canvas');

// random rgba color with a constant alpha property
ranCol = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    a = 0.92;
    let rgba = 'rgba';
    var col = `${rgba}(${r},${g},${b}, ${a})`;
    return col;

}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//the canvas will be as big as the current window size
canvas.style.backgroundColor = 'black';

var c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 4;

window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;

})

// creating Circle contstructor
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = ranCol();
    //the color is here instead of in the draw method so that it stays constant instead of changing everytime the circle is drawn


    // drawing the circle
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill()
    }

    // this is HOW the circles will animate. this method will go in the animate function which will trigger it
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
                this.dx += Math.random();
                this.dy += Math.random();
                this.dx -= Math.random();
                this.dy -= Math.random();
            }

        } else if (this.radius > minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

// create empty array, 100 new circles with a radius of 30 in random places on the page at a random velocity then pushed these circles into the empty array
var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius)
    var y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius)
    var dx = (Math.random() - 0.5) * 4
    var dy = (Math.random() - 0.5) * 4

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// animation function
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();