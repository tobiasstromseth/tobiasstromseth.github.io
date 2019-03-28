
var st = 25; //Størrelse på hvert rektangel i canvas
var DIMENSJONER = 20;

var felt = []; //Arrey til canvas
var feltKart;

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
        console.log(i);
        felt[i].draw();
    }
}

function generateFelt() {

    var f = [];

    for (var i = 0; i < FELT.length; i++) {

        var rad = FELT[i].split(",");
        for (var j = 0; j < rad.length; j++) {

            var type = parseTileType(rad[j]);
            var t = new Tile(j, i, type);
            //console.log(t);
            f.push(t);
        }
    }

    return f;
}