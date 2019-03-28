
var FELT = [
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
];

var typer = ["BARRIER", "OPEN", "BISCUTT", "CHERRY"];
//var typer = ["BARRIER", "OPEN", "BISCUTT"];
//var typer = ["CHERRY", "BARRIER"];

var halv_st = st / 2;
var tre_st = st / 3;
var kvart_st = st / 4;


function Tile(x, y, type) {

    this.x = x;
    this.y = y;
    this.type = type;
}

 Tile.prototype.draw = function () {

    switch(this.type) {

        case "BARRIER":

            strokeWeight(5);
            stroke(0);
            fill("#0000FF");
            rect(this.x * st, this.y * st, st, st);
            break;


        case "BISCUTT":

            ellipseMode(CORNER);
            noStroke();
            fill(255);
            ellipse(this.x * st + tre_st, this.y * st + tre_st, tre_st);

            break;

        case "CHERRY":

            ellipseMode(CORNER);
            stroke(255);
            strokeWeight(2);
            fill("#FF2222");
            ellipse(this.x * st + kvart_st, this.y * st + kvart_st, halv_st);
            break;
    }
};

function parseTileType(t) {

    switch (t) {

        case "0":
            return "BARRIER";

        case "1":
            return "OPEN";

        case "2":
            return "BISCUTT";

        case "3":
            return "CHERRY";
    }
}