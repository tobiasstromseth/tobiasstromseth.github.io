
var st = 25; //Størrelse på hvert rektangel i canvas
var DIMENSJONER = 20;

var felt = []; //Arrey til canvas

var pacman;

/*function preload() {
    feltKart = loadStrings("Felt.txt");
}*/

function setup () {

    createCanvas(500, 500);


    felt = generateFelt();
}

function draw() {

    background(51);

    /* Tegn Tiles */
    for (var i = 0; i < felt.length; i++){
        felt[i].update();
        felt[i].draw();
    }

    styrPacman();
}

function styrPacman() {

    if (keyIsDown(UP_ARROW)) {

        pacman.move(0, -1, true);
    } else if (keyIsDown(DOWN_ARROW)) {

        pacman.move(0, 1, true);
    } else if (keyIsDown(LEFT_ARROW)) {

        pacman.move(-1, 0, true);
    } else if (keyIsDown(RIGHT_ARROW)) {

        pacman.move(1, 0, true);
    }
}

function generateFelt() {

    var f = [];

    for (var i = 0; i < FELT.length; i++) {

        var rad = FELT[i].split(",");
        for (var j = 0; j < rad.length; j++) {

            var type = typer[rad[j]];
            var tile = new Tile(j, i, type);

            if (tile == "PACMAN"){
                pacman = tile;
            }
            f.push(tile);
        }
    }

    return f;
}