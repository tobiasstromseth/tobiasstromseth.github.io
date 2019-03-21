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

        case "OPEN":
            break;

        case "BISCUTT":
            noStroke();
            fill(255);
            ellipse(this.x * st, this.y * st, st / 3);

            break;

        case "CHERRY":
            break;
    }
};