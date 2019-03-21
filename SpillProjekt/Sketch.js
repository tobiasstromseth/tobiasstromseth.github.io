
var st = 25; //Størrelse på hvert rektangel i canvas
var DIMENSJONER = 20;

var felt = []; //Arrey til canvas

function setup () {

    createCanvas(500, 500);


    for (var i = 0; i < 400; i++) {
        felt.push(new Tile(i % 20, Math.floor(i / 20), "BISCUTT"));

    }
}

function draw() {

    background(51);

    /* Tegn Tiles */
    for (var i = 0; i < felt.length; i++){
        felt[i].draw();
    }
}
