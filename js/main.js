// VARS
const VAR = {
    speed: 3,
}

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    };

    move() {
        this.x = this.x + VAR.speed;
    };
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    const ball = new Ball(5, 5, 50);
}


function draw() {
    background(100);
    ball.move();
    stroke();
}