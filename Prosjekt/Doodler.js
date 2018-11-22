function Doodler(x, y, enemy, s, c) {

    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);

    this.c = c; //color
    this.s = s; //size

    this.enemy = enemy;
}

Doodler.prototype.update = function () {

//    if (this.enemy){

  //  } else {

    //    this.vel.y += GRAVITY;
    //}


    this.loc.add(this.vel);
    this.vel.mult(0.8)
};

Doodler.prototype.applyForce = function(force){

    this.vel.add(force)
}

Doodler.prototype.draw = function () {

    stroke(255);
    strokeWeight(3);
    fill(this.c);
    ellipse(this.loc.x, this.loc.y, this.s);
};