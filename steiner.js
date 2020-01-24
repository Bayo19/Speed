let canvas = document.querySelector('canvas');



ranCol = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rgba = 'rgba';
    canvas.style.backgroundColor = `${rgba}(${r},${g},${b}, 0.1)`;


}
ranCol2 = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rgba = 'rgba';
    var col = `${rgba}(${r},${g},${b}, 0.5)`;
    return col;

}



// canvas.style.backgroundColor = ranCol();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let c = canvas.getContext('2d');
// c.fillRect(x, y, width, height)

c.fillStyle = ranCol2();
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.lineTo(200, 50);
c.lineTo(500, 100);
c.lineTo(300, 100);
c.strokeStyle = ranCol2();
c.stroke();

for (let i = 0; i < 150; i++) {
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = ranCol2();
    c.stroke();
}
// Arc / Circle

// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = ranCol2();
// c.stroke();

setInterval(ranCol, 1010)