
/* Her setter jeg opp et 2D kart av feltet ved hjelp av tall i array*/
//0 = VEGGER
//1 = KJEKS
//2 = TOM FIRKANT
//3 = KIRSEBÆR
//4 = SPØKELSE
//5 = PAC-MAN
var FELT = [
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
    "0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0",
    "0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,0",
    "0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0",
    "0,0,0,0,3,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,0,0,1,1,0,0,2,0,0,1,1,0,0,0,0,0",
    "0,3,1,1,1,1,1,1,0,4,2,4,0,1,1,1,1,1,1,0",
    "0,1,1,1,1,1,1,1,0,4,2,4,0,1,1,1,1,1,3,0",
    "0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0",
    "0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0",
    "0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0",
    "0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0",
    "0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0",
    "0,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,3,1,0",
    "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
];

var typer = ["BARRIER", "BISCUTT", "OPEN", "CHERRY", "GHOST", "PACMAN"];
//var typer = ["BARRIER", "OPEN", "BISCUTT"];
//var typer = ["CHERRY", "BARRIER"];

var halv_st = st / 2;
var tre_st = st / 3;
var kvart_st = st / 4;


function Tile(x, y, type) {

    this.x = x;
    this.y = y;
    this.type = type;

    this.dX = -1; //Destinasjon x, -1 en fordi det er morsomt hvis jeg får en bug så flytter alle seg opp til hjørnet hahah:)
    this.dY = -1; //Destinasjon y
    this.moving = false;

    this.speed = 0.2;
}

Tile.prototype.update = function () {
    if (this.moving) {
        this.x = lerp(this.x, this.dX, this.speed);
        this.y = lerp(this.y, this.dY, this.speed);

        if (this.x == this.dX && this.y == this.dY)
            this.moving = false;
    }
};

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

        case "GHOST":
            fill("#FF00EE");
            stroke(0);
            strokeWeight(1);
            beginShape();
            vertex(this.x * st + halv_st, this.y * st + kvart_st);
            vertex(this.x * st + kvart_st, this.y * st + (kvart_st * 3));
            vertex(this.x * st + (kvart_st * 3), this.y * st + (kvart_st * 3));
            endShape(CLOSE);
            break;

        case "PACMAN":
            stroke("#FFFF00");
            strokeWeight(4);
            fill("#FFFF33");
            ellipse(this.x * st + kvart_st, this.y * st + kvart_st, halv_st);
            break;
    }
};

Tile.prototype.move = function (x, y) {

    var dY = this.y + y;
    var dX = this.x + x;

    if (this.moving)
    return;

    var destinasjonsTile = felt[dY * DIMENSJONER + dX];
    var type = destinasjonsTile.type;
    if (this.moving || (type == "BARRIER" && this.type != "BARRIER"))
        console.log("du kan ikke bevege deg");
        return; // ikke tilat bevegelse
    this.moving = true;
    this.dX = dX;
    this.dY = dY;
};