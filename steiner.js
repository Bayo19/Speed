var canvas = document.querySelector('canvas');

ranCol = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rgba = 'rgba';
    canvas.style.backgroundColor = `${rgba}(${r},${g},${b}, 0.39)`;

}
ranCol2 = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rgba = 'rgba';
    var col = `${rgba}(${r},${g},${b}, 0.9)`;
    return col;

}


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)

// c.fillStyle = ranCol2();
// c.fillRect(100, 100, 100, 100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);
// c.fillRect(400, 200, 100, 100);
// c.fillRect(500, 100, 100, 100);
// c.fillRect(600, 200, 100, 100);
// c.fillRect(700, 300, 100, 100);
// c.fillRect(800, 400, 100, 100);
// c.fillRect(700, 500, 100, 100);
// c.fillRect(600, 600, 100, 100);
// c.fillRect(500, 500, 100, 100);




// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 100);
// c.lineTo(200, 50);
// c.lineTo(500, 100);
// c.lineTo(300, 100);
// c.strokeStyle = ranCol2();
// c.stroke();

// for (let i = 0; i < 150; i++) {
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight
//     let circSize = Math.floor(Math.random() * 50);
//     c.beginPath();
//     c.arc(x, y, circSize, 0, Math.PI * 2, false);
//     c.strokeStyle = ranCol2();
//     c.stroke();
// }
// Arc / Circle

// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = ranCol2();
// c.stroke();



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.fillStyle = ranCol2();
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = ranCol2();
        c.stroke();
        c.fill()
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 30
    var x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius)
    var y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius)
    var dx = (Math.random() - 0.5) * 4
    var dy = (Math.random() - 0.5) * 4

    circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate()

setInterval(ranCol, 1);