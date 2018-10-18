// VAR
const VAR = {
    speed: 5,
    acc: 1,
}

let ball1;
class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    };

    move() {
        this.x = this.x + VAR.speed;
        if (this.x >= window.innerWidth - this.r) {

            VAR.speed = -VAR.speed - VAR.acc;
            console.log(VAR);
        } else if (this.x <= 0) {
            VAR.speed = -VAR.speed + VAR.acc;
            console.log(VAR);
        }


    };

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r, this.r);
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ball1 = new Ball(50, 50, 50);
    // ball2 = new Ball(50, 150, 50);
}


function draw() {
    background(100);

    ball1.move();
    ball1.show();
    // ball2.move();
    // ball2.show();
}