// VAR
const VAR = {
    speed: 25,
    acc: 5,
}

let ball1;
class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    };

    bounce() {
        this.x = this.x + VAR.speed;
        if (this.x >= window.innerWidth - this.r) {
            VAR.speed = -VAR.speed;
            console.log(VAR);
            VAR.speed--;
        } else if (this.x <= 0) {
            VAR.speed = -VAR.speed;
            console.log(VAR);
            VAR.speed++;
        }
        if (VAR.speed >= 50) {
            VAR.speed -= 2
        } else if (VAR.speed <= -50) {
            VAR.speed += 2;
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
    // ball2 = new Ball(150, 100, 50);
    // ball3 = new Ball(67, 120, 50);
    // ball4 = new Ball(20, 70, 50);
    // ball5 = new Ball(59, 240, 50);

}


function draw() {
    background(100);

    ball1.bounce();
    ball1.show();
    // ball2.bounce();
    // ball2.show();
    // ball3.bounce();
    // ball3.show();
    // ball4.bounce();
    // ball4.show();
    // ball5.bounce();
    // ball5.show();
}