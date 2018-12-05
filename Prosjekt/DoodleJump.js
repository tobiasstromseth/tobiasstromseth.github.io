
var GRAVITY = 0.6;
var player;

var platforms = [];

function setup() {

    createCanvas(400, 600,);

    player = new Doodler(width / 2, height / 2, false, 30, color("#00d8ff"));

    /* starts platform, usikker på om jeg skal bruke denne */
    // platforms.push(new platform(player.loc.x, player.loc.y + 50, 65, color("#FF80F0")));

    for (var y = 0; y < height; y+= 50){
        for (var i = 0; i < 3; i++) {

            var x = noise(i, y) * width;

            if (noise(y, i) > 0.5)
                platforms.push(new platform(x, y, 55, color("#1fec1a")));
        };
    };

};

function draw() {

    background(51);


    player.update();
    player.draw();
    player.applyForce(createVector(0, GRAVITY));

    if (player.loc.y > height) {
        endGame();
    };

    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
        if (platforms[i].collidesWith(player)) {

            player.jump();
        };
    };

    handleKeys();
};
    /* function keyPressed() {
        if (keyCode == 32)
            //Jump
        player.applyForce(createVector(0, -20));
    }; */

function handleKeys() {
    
    if (keyIsDown(LEFT_ARROW)) {
        //Ball goes to the left while holding the arrow button
        player.applyForce(-1, 0);
    } else if (keyIsDown(RIGHT_ARROW)) {
        //Ball goes to the right while holding the arrow button
        player.applyForce(1, 0);
    }
};

function endGame() {
    textAlign(CENTER);
    textSize(60);
    noStroke();
    fill("#ff0000");
    text("Game Over!", width / 2, height / 2);
    noLoop();
};