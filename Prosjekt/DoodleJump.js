
var GRAVITY = 0.3;
var player;

function setup() {

    createCanvas(400, 600);

    player = new Doodler(width / 2, height - 50, false, 30, color("#FFF000"));
}

function draw() {

    background(51);


    player.update();
    player.draw();
    player.applyForce(createVector(0, GRAVITY));

    if (player.loc.y > height) {
        endGame();
    }

    handleKeys();
}

function handleKeys() {
    
    if (keyIsDown(LEFT_ARROW)) {
        console.log("flag")
        player.applyForce(-1, 0)
    } else if (keyIsDown(RIGHT_ARROW)) {
        console.log("flag")
        player.applyForce(1, 0)
    }
}

function endGame() {
    textAlign(CENTER);
    textSize(60)
    noStroke();
    fill("#00FF00");
    text("Game Over!", width / 2, height / 2);
    noLoop();
}